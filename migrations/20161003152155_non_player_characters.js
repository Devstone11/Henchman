
exports.up = function(knex, Promise) {
  return knex.schema.createTable('non_player_characters', function(table) {
    table.increments('id');
    table.integer('scene_id');
    table.integer('race_id');
    table.string('name');
    table.integer('current_hit_points');
    table.integer('initiative');
    table.string('npc_notes', 2000);
    table.string('current_effects', 2000);
    table.string('loot', 2000);
    table.bool('active');

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('non_player_characters');
};
