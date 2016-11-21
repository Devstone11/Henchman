
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_characters', function(table) {
    table.increments('id');
    table.integer('campaign_id');
    table.string('name');
    table.integer('level');
    table.string('class');
    table.string('race');
    table.integer('speed');
    table.integer('xp');
    table.integer('armor_class');
    table.integer('fortitude');
    table.integer('reflex');
    table.integer('will');
    table.integer('passive_insight');
    table.integer('passive_perception');
    table.integer('max_hit_points');
    table.integer('current_hit_points');
    table.integer('initiative');
    table.string('current_effects', 2000);
    table.bool('active');

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player_characters');
};
