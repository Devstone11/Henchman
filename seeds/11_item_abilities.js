
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('item_abilities').insert({item_id: 1, ability_id: 1}),
    knex('item_abilities').insert({item_id: 3, ability_id: 2}),
    knex('item_abilities').insert({item_id: 2, ability_id: 9})
  ]);
};
