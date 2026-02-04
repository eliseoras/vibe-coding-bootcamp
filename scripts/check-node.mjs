const requiredMajor = 24;

const major = Number.parseInt(process.versions.node.split(".")[0] ?? "0", 10);

if (!Number.isFinite(major) || major < requiredMajor) {
  console.error(
    [
      `\nThis project requires Node ${requiredMajor}+ (you are running ${process.versions.node}).`,
      "\nQuick fix:",
      "  - If you use nvm: nvm install 24 && nvm use 24",
      "  - Then run: npm install\n",
    ].join("\n"),
  );
  process.exit(1);
}
