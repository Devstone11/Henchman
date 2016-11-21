
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scenes', function(table) {
    table.increments('id');
    table.integer('encounter_id');
    table.string('name');
    table.string('setting_description', 2000);
    table.string('misc_loot', 2000);
    table.bool('active');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('scenes');
};
