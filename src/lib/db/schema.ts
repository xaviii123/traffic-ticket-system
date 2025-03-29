import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const tickets = sqliteTable("tickets", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  licensePlate: text("license_plate").notNull(),
  driverName: text("driver_name").notNull(),
  violationType: text("violation_type").notNull(),
  fineAmount: integer("fine_amount").notNull(),
  dateIssued: text("date_issued").notNull(), // ISO string
  status: text("status").notNull(), // "Paid" or "Unpaid"
  email: text("email").notNull(), // For future email feature
});
