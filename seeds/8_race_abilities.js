
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('race_abilities').insert({race_id: 1, ability_id: 3}),
    knex('race_abilities').insert({race_id: 1, ability_id: 4}),
    knex('race_abilities').insert({race_id: 2, ability_id: 5}),
    knex('race_abilities').insert({race_id: 2, ability_id: 6}),
    knex('race_abilities').insert({race_id: 3, ability_id: 7}),
    knex('race_abilities').insert({race_id: 3, ability_id: 8})
  ]);
};
