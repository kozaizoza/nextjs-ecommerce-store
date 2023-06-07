import { Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name varchar(40) NOT NULL,
    category varchar(40) NOT NULL,
    price integer NOT NULL,
    description varchar(700) NOT NULL
  )
  `;
}

export async function down(sql: Sql) {
  await sql`
    DROP TABLE products
  `;
}
