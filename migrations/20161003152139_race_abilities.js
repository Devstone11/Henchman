
exports.up = function(knex, Promise) {
  return knex.schema.createTable('race_abilities', function(table) {
    table.increments('id');
    table.integer('race_id');
    table.integer('ability_id');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('race_abilities');
};
