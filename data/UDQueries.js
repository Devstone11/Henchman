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
  },
  updateEncounter: function(encounter, id) {
    return knex('encounters').where('id', id).update({
      name: encounter.name,
      active: encounter.active
    });
  },
  updateScene: function(scene, id) {
    return knex('scenes').where('id', id).update({
      name: scene.name,
      setting_description: scene.setting_description,
      misc_loot: scene.misc_loot,
      active: scene.active
    })
  },
  updatePlayer: function(player, id) {
    return knex('player_characters').where('id', id).update({
      name: player.name,
      class: player.class,
      race: player.race,
      armor_class: player.armor_class,
      initiative: player.initiative,
      fortitude: player.fortitude,
      reflex: player.reflex,
      will: player.will,
      speed: player.speed,
      current_effects: player.current_effects,
      current_hit_points: player.current_hit_points,
      max_hit_points: player.max_hit_points,
      passive_insight: player.passive_insight,
      passive_perception: player.passive_perception,
      xp: player.xp,
      level: player.level,
      active: player.active
    });
  },
  updateNPC: function(npc, id) {
    return knex('non_player_characters').where('id', id).update({
      name: npc.npc_name,
      npc_notes: npc.npc_notes,
      initiative: npc.initiative,
      current_effects: npc.current_effects,
      current_hit_points: npc.current_hit_points,
      loot: npc.loot,
      active: npc.npc_active
    });
  },
  deleteCampaign: function(camp_id) {
    return knex('campaigns').where('id', camp_id).del();
  },
  deleteCampaignPCs: function(camp_id) {
    return knex('player_characters').where('campaign_id', camp_id).del();
  },
  deleteCampaignEncounters: function(camp_id) {
    return knex('encounters').where('campaign_id', camp_id).del();
  },
  deleteCampaignScenes: function(camp_id) {
    return knex.raw(
      `DELETE FROM scenes
      WHERE encounter_id IN (
        SELECT encounters.id
        FROM encounters
        WHERE encounters.campaign_id = ${camp_id}
      )`
    )
  },
  deleteCampaignObstacles: function(camp_id) {
    return knex.raw(
      `DELETE FROM obstacles
      WHERE scene_id IN (
        SELECT scenes.id
        FROM scenes
        JOIN encounters ON scenes.encounter_id = encounters.id
        WHERE encounters.campaign_id = ${camp_id}
      )`
    )
  },
  deleteCampaignNPCs: function(camp_id) {
    return knex.raw(
      `DELETE FROM non_player_characters
      WHERE scene_id IN (
        SELECT scenes.id
        FROM scenes
        JOIN encounters ON scenes.encounter_id = encounters.id
        WHERE encounters.campaign_id = ${camp_id}
      )`
    )
  },
  deleteEncounterScenes: function(encounter_id) {
    return knex('scenes').where('encounter_id', encounter_id).del();
  },
  deleteSceneNPCs: function(scene_id) {
    return knex('non_player_characters').where('scene_id', scene_id).del();
  },
  deleteSceneObstacles: function(scene_id) {
    return knex('obstacles').where('scene_id', scene_id).del();
  }
}
