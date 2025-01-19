import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

export const db = drizzle(process.env.DATABASE_URL!);
// const db = drizzle({ client: sql });
