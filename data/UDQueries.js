var knex = require('../db/knex');

module.exports = {
  //'UPDATE' Queries
  updateUser: function(user, id) {
    return knex('users').where('id', id).update('email', user.email);
  },
  updateCampaign: function(campaign, id) {
    return knex('campaigns').where('id', id).update({
      name: campaign.name,
      active: campaign.active
    });
  }
}
