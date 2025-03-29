import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle/migrations",
  driver: "sqlite",
  dialect: "sqlite", // ✅ this is the line it needs
  dbCredentials: {
    url: "./src/lib/db/sqlite.db",
  },
});
