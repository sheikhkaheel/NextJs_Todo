import { varchar, pgTable, uuid } from "drizzle-orm/pg-core";

export const todoSchema = pgTable("todo", {
  id: uuid("id").defaultRandom().primaryKey(),
  task: varchar("task", { length: 255 }).notNull(),
});
