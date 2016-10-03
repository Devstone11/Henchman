
exports.up = function(knex, Promise) {
  return knex.schema.createTable('obstacles', function(table) {
    table.increments('id');
    table.integer('scene_id');
    table.string('name');
    table.string('perception_check');
    table.string('attack_roll');
    table.string('attack_vs');
    table.string('damage_roll');
    table.string('obstacle_notes');

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('obstacles');
};
