
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('campaigns').insert({id: 1, user_id: 1, name: 'WestWorld', active: true}),
    knex('campaigns').insert({id: 2, user_id: 1, name: 'Middle Earth', active: true}),
    knex('campaigns').insert({id: 3, user_id: 2, name: 'Pirates!', active: true})
  ]);
};
