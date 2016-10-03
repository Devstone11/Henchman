
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function(table) {
    table.increments('id');
    table.integer('npc_id');
    table.string('name');
    table.string('item_notes');
    table.string('enhancement_amount');
    table.string('enhancement_target');

    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items');
};
