var knex = require('../db/knex');

module.exports = {
  createUser: function(email) {
    return knex.raw(`INSERT into users (id, email) values (DEFAULT, '${email}')`);
  }
  createCampaign: function(user_id, name) {
    return knex.raw(`INSERT into campaigns (id, user_id, name) values (DEFAULT, ${user_id}, '${name}')`);
  },
  createEncounter: function(campaign_id, name) {
    return knex.raw(`INSERT into encounters (id, campaign_id, name) values (DEFAULT, ${campaign_id}, '${name}')`)
  }
}
