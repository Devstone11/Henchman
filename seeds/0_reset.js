
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('campaigns').del()
      .then(function() {
        return knex('player_characters').del()
        .then(function () {
          return knex('encounters').del()
          .then(function() {
            return knex('scenes').del()
            .then(function() {
              return knex('races').del()
              .then(function() {
                return knex('abilities').del()
                .then(function() {
                  return knex('race_abilities').del()
                  .then(function() {
                    return knex('non_player_characters').del()
                    .then(function() {
                      return knex('items').del()
                      .then(function() {
                        return knex('item_abilities').del()
                        .then(function() {
                          return knex('obstacles').del()
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
};
