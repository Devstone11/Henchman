
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('encounters').insert({id: 1, campaign_id: 1, name: 'Crystal Cave', active: true}),
    knex('encounters').insert({id: 2, campaign_id: 1, name: 'Sheriff\'s Mansion', active: true}),
    knex('encounters').insert({id: 3, campaign_id: 1, name: 'Broken Bottle Saloon', active: true})
  ]);
};
