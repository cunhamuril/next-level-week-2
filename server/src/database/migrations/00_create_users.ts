import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable();
    table.string("avatar");
    table.string("whatsapp");
    table.string("bio");
    table.string("password").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
