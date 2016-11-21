
exports.up = function(knex, Promise) {
  return knex.schema.createTable('abilities', function(table) {
    table.increments('id');
    table.string('name');
    table.string('type');
    table.string('range');
    table.string('attack_roll');
    table.string('attack_vs');
    table.string('damage_roll');
    table.string('ability_notes', 2000);
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('abilities');
};
