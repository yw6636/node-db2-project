exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', table => {
    table.increments('car_id')
    table.string('vin', 13).notNullable().unique()
    table.string('make', 128).notNullable()
    table.string('model', 128).notNullable()
    table.integer('mileage').unsigned().notNullable()
    table.string('title', 128)
    table.string('transmission', 128)
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
