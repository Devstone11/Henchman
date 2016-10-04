
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('item_abilities').insert({id: 1, item_id: 1, ability_id: 1}),
    knex('item_abilities').insert({id: 2, item_id: 3, ability_id: 2})
  ]);
};
