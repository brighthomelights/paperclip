import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: ".",
  testMatch: "*.spec.ts",
  workers: 1,
  timeout: 180_000,
  use: { viewport: { width: 1440, height: 1080 }, screenshot: "only-on-failure", trace: "retain-on-failure" },
  outputDir: "../../../test-results/workspace-bootstrap",
  reporter: [["list"]],
});
