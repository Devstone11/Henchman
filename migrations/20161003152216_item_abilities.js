
exports.up = function(knex, Promise) {
  return knex.schema.createTable('item_abilities', function(table) {
    table.increments('id');
    table.integer('item_id');
    table.integer('ability_id');

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('item_abilities');
};
