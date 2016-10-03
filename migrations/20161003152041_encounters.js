
exports.up = function(knex, Promise) {
  return knex.schema.createTable('encounters', function(table) {
    table.increments('id');
    table.integer('campaign_id');
    table.string('name');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('encounters');
};
