import { spawnSync } from "node:child_process";
import fs from "node:fs";

// Husky needs a git repo. This makes installs work for students
// who download a ZIP or run in non-git environments.
if (!fs.existsSync(".git")) {
  process.exit(0);
}

const res = spawnSync("npx", ["husky", "install"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(res.status ?? 1);
