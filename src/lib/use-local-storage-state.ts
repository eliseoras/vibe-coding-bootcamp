import * as React from "react";

function safeParseJson<T>(value: string): T | undefined {
  try {
    return JSON.parse(value) as T;
  } catch {
    return undefined;
  }
}

export function useLocalStorageState<T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState<T>(() => {
    const raw = localStorage.getItem(key);
    if (raw == null) return defaultValue;
    return safeParseJson<T>(raw) ?? defaultValue;
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  React.useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.storageArea !== localStorage) return;
      if (e.key !== key) return;
      if (e.newValue == null) {
        setState(defaultValue);
        return;
      }
      const parsed = safeParseJson<T>(e.newValue);
      if (parsed !== undefined) setState(parsed);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [defaultValue, key]);

  return [state, setState];
}
