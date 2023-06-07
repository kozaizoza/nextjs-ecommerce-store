import { config } from 'dotenv-safe';
import postgres from 'postgres'; // to connect to the database first import postgres

config();

const sql = postgres();

console.log(
  await sql`
    SELECT * FROM products; `,
);
await sql.end();
