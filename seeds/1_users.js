
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('users').insert({email: 'fake@fake.fake', facebook_id: 12345}),
    knex('users').insert({email: 'fake2@fake.fake', facebook_id: 4462272956288})
  ]);
  // // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  //     return Promise.all([
  //       // Inserts seed entries
  //       knex('table_name').insert({id: 1, colName: 'rowValue1'}),
  //       knex('table_name').insert({id: 2, colName: 'rowValue2'}),
  //       knex('table_name').insert({id: 3, colName: 'rowValue3'})
  //     ]);
  //   });
};
