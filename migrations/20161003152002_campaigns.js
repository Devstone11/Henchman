
exports.up = function(knex, Promise) {
  return knex.schema.createTable('campaigns', function(table) {
    table.increments('id');
    table.integer('user_id');
    table.string('name');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('campaigns');
};
