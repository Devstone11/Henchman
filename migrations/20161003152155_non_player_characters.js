
exports.up = function(knex, Promise) {
  return knex.schema.createTable('non_player_characters', function(table) {
    table.increments('id');
    table.integer('scene_id');
    table.integer('race_id');
    table.string('name');
    table.integer('current_hit_points');
    table.integer('initiative');
    table.string('npc_notes');
    table.string('current_effects');
    table.string('loot');

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('non_player_characters');
};
