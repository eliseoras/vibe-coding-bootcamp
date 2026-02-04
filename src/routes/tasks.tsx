import * as React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  ListTodoIcon,
  PencilIcon,
  SearchIcon,
  TrashIcon,
  XIcon,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocalStorageState } from "@/lib/use-local-storage-state";

type Task = {
  id: string;
  title: string;
  done: boolean;
  createdAt: number;
  updatedAt: number;
};

type Filter = "all" | "active" | "done";

const STORAGE_KEY = "react-starter-template.tasks.v1";

const createTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(80, "Keep it under 80 characters"),
});
type CreateTaskInput = z.infer<typeof createTaskSchema>;

const editTaskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(80, "Keep it under 80 characters"),
  done: z.boolean(),
});
type EditTaskInput = z.infer<typeof editTaskSchema>;

function createId(): string {
  // `crypto.randomUUID()` is not available in some browsers/environments.
  // This fallback is good enough for local-only demo data.
  const c = globalThis.crypto as unknown as
    | { randomUUID?: () => string }
    | undefined;
  if (c?.randomUUID) return c.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function formatDate(ms: number): string {
  return new Date(ms).toLocaleString();
}

export function TasksRoute() {
  const [tasks, setTasks] = useLocalStorageState<Task[]>(STORAGE_KEY, []);

  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState<Filter>("all");

  const createForm = useForm<CreateTaskInput>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: { title: "" },
  });

  const editForm = useForm<EditTaskInput>({
    resolver: zodResolver(editTaskSchema),
    defaultValues: { title: "", done: false },
  });

  const [editOpen, setEditOpen] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);

  const handleCreateSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    void createForm.handleSubmit(createTask)(e);
  };

  const handleEditSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    void editForm.handleSubmit(saveEdit)(e);
  };

  const sortedTasks = React.useMemo(() => {
    return [...tasks].sort((a, b) => {
      if (a.done !== b.done) return a.done ? 1 : -1;
      return b.updatedAt - a.updatedAt;
    });
  }, [tasks]);

  const filteredTasks = React.useMemo(() => {
    const q = query.trim().toLowerCase();

    return sortedTasks.filter((t) => {
      if (filter === "active" && t.done) return false;
      if (filter === "done" && !t.done) return false;
      if (!q) return true;
      return t.title.toLowerCase().includes(q);
    });
  }, [filter, query, sortedTasks]);

  const counts = React.useMemo(() => {
    const done = tasks.filter((t) => t.done).length;
    const active = tasks.length - done;
    return { all: tasks.length, active, done };
  }, [tasks]);

  const canClearCompleted = counts.done > 0;

  const editingTask = React.useMemo(
    () => tasks.find((t) => t.id === editingId) ?? null,
    [editingId, tasks],
  );

  function createTask(values: CreateTaskInput) {
    const now = Date.now();
    const task: Task = {
      id: createId(),
      title: values.title.trim(),
      done: false,
      createdAt: now,
      updatedAt: now,
    };

    setTasks((prev) => [task, ...prev]);
    createForm.reset({ title: "" });
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function toggleDone(id: string, done: boolean) {
    const now = Date.now();
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done, updatedAt: now } : t)),
    );
  }

  function openEdit(task: Task) {
    setEditingId(task.id);
    editForm.reset({ title: task.title, done: task.done });
    setEditOpen(true);
  }

  function saveEdit(values: EditTaskInput) {
    if (!editingId) return;

    const now = Date.now();
    setTasks((prev) =>
      prev.map((t) =>
        t.id === editingId
          ? {
              ...t,
              title: values.title.trim(),
              done: values.done,
              updatedAt: now,
            }
          : t,
      ),
    );

    setEditOpen(false);
  }

  function clearCompleted() {
    setTasks((prev) => prev.filter((t) => !t.done));
  }

  function resetDemo() {
    setTasks([]);
    setQuery("");
    setFilter("all");
  }

  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Local Tasks</h1>
          <p className="max-w-prose text-sm opacity-80">
            CRUD demo that persists to localStorage. Refresh to confirm.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">All: {counts.all}</Badge>
            <Badge variant="outline">Active: {counts.active}</Badge>
            <Badge variant="outline">Done: {counts.done}</Badge>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <div className="relative w-full sm:w-[260px]">
              <SearchIcon className="text-muted-foreground absolute top-2.5 left-2 size-4" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tasks…"
                className="pl-8"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button
                type="button"
                variant={filter === "active" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("active")}
              >
                Active
              </Button>
              <Button
                type="button"
                variant={filter === "done" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("done")}
              >
                Done
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearCompleted}
              disabled={!canClearCompleted}
            >
              Clear completed
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={resetDemo}
              disabled={
                tasks.length === 0 && query.trim() === "" && filter === "all"
              }
            >
              Reset
            </Button>
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr] lg:items-start">
        <Card className="lg:sticky lg:top-6">
          <CardHeader>
            <CardTitle>Add task</CardTitle>
            <CardDescription>Keep titles short and specific.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...createForm}>
              <form onSubmit={handleCreateSubmit} className="grid gap-3">
                <FormField
                  control={createForm.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <FormControl>
                          <Input placeholder="Buy milk" {...field} />
                        </FormControl>
                        <Button type="submit">Add</Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Tasks</CardTitle>
              <CardDescription>
                Stored locally (key:{" "}
                <span className="font-mono text-xs">{STORAGE_KEY}</span>)
              </CardDescription>
            </div>
            {query.trim() !== "" && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setQuery("")}
              >
                <XIcon className="mr-2 size-4" />
                Clear search
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[56px] text-center">Done</TableHead>
                  <TableHead>Task</TableHead>
                  <TableHead className="hidden lg:table-cell">
                    Updated
                  </TableHead>
                  <TableHead className="w-[132px] text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTasks.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="py-10">
                      <div className="text-muted-foreground flex items-center justify-center gap-3">
                        <ListTodoIcon className="size-5" />
                        <span className="text-sm">
                          {tasks.length === 0
                            ? "No tasks yet. Add your first one."
                            : "No tasks match your filters."}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredTasks.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="text-center">
                        <Checkbox
                          checked={t.done}
                          onCheckedChange={(checked) =>
                            toggleDone(t.id, checked === true)
                          }
                          aria-label={t.done ? "Mark not done" : "Mark done"}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span
                            className={
                              t.done ? "line-through opacity-70" : "font-medium"
                            }
                          >
                            {t.title}
                          </span>
                          <span className="text-muted-foreground text-xs lg:hidden">
                            Updated {formatDate(t.updatedAt)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground hidden lg:table-cell">
                        {formatDate(t.updatedAt)}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="inline-flex items-center justify-end gap-1">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => openEdit(t)}
                          >
                            <PencilIcon className="mr-2 size-4" />
                            Edit
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              if (window.confirm("Delete this task?"))
                                deleteTask(t.id);
                            }}
                          >
                            <TrashIcon className="mr-2 size-4" />
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
              <TableCaption>
                Tip: open this in two tabs to see localStorage sync.
              </TableCaption>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Dialog
        open={editOpen}
        onOpenChange={(open) => {
          setEditOpen(open);
          if (!open) setEditingId(null);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit task</DialogTitle>
            <DialogDescription>
              Update title and completion status.
            </DialogDescription>
          </DialogHeader>

          <Form {...editForm}>
            <form onSubmit={handleEditSubmit} className="grid gap-4">
              <FormField
                control={editForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editForm.control}
                name="done"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <div className="flex items-center justify-between rounded-md border px-3 py-2">
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              field.onChange(checked === true)
                            }
                          />
                          <span className="text-sm">
                            {field.value ? "Completed" : "Active"}
                          </span>
                        </div>
                        <Badge variant={field.value ? "default" : "secondary"}>
                          {field.value ? "Done" : "Active"}
                        </Badge>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={!editingTask}>
                  Save
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
