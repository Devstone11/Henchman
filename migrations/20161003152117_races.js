
exports.up = function(knex, Promise) {
  return knex.schema.createTable('races', function(table) {
    table.increments('id');
    table.string('name');
    table.integer('max_hit_points');
    table.integer('armor_class');
    table.integer('xp_value');
    table.integer('fortitude');
    table.integer('reflex');
    table.integer('will');
    table.integer('speed');
    table.string('race_notes', 2000);
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('races');
};
