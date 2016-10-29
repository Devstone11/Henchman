var knex = require('../db/knex');

module.exports = {
  //'CREATE' Queries
  createUser: function(email) {
    return knex('users').insert({
      email: email
    })
  },
  createCampaign: function(user_id, name) {
    return knex('campaigns').insert({
      user_id: user_id,
      name: name,
      active: true
    })
  },
  createEncounter: function(campaign_id, name) {
    return knex('encounters').insert({
      campaign_id: campaign_id,
      name: name,
      active: true
    })
  },
  createPlayerCharacter: function(campaign_id, name, level, pcClass, race, speed, xp, ac, fort, ref, will, passive_insight, passive_perception, max_hp) {
    return knex('player_characters').insert({
      campaign_id: campaign_id,
      name: name,
      level: level,
      class: pcClass,
      race: race,
      speed: speed,
      xp: xp,
      armor_class: ac,
      fortitude: fort,
      reflex: ref,
      will: will,
      passive_insight: passive_insight,
      passive_perception: passive_perception,
      max_hit_points: max_hp,
      current_hit_points: max_hp,
      iniative: 0,
      current_effects: '',
      active: true
    })
  },
  createScene: function(encounter_id, scene) {
    return knex('scenes').insert({
      encounter_id: encounter_id,
      name: scene.name,
      setting_description: scene.setting_description,
      misc_loot: scene.misc_loot,
      active: true
    })
  },
  createAbility: function(name, type, range, attack_roll, attack_vs, damage_roll, ability_notes) {
    return knex('abilities').insert({
      id: DEFAULT,
      name: name,
      type: type,
      range: range,
      attack_roll: attack_roll,
      attack_vs: attack_vs,
      damage_roll: damage_roll,
      ability_notes: ability_notes
    })
  },
  createRace: function(name, max_hit_points, armor_class, xp_value, fortitude, reflex, will, speed, race_notes) {
    return knex('races').insert({
      id: DEFAULT,
      name: name,
      max_hit_points: max_hit_points,
      armor_class: armor_class,
      xp_value: xp_value,
      fortitude: fortitude,
      reflex: reflex,
      will: will,
      speed: speed,
      race_notes: race_notes
    })
  },
  createRaceAbility: function(race_id, ability_id) {
    return knex('race_abilities').insert({
      id: DEFAULT,
      race_id: race_id,
      ability_id: ability_id
    })
  },
  createNonPlayerCharacter: function(scene_id, npc, max_hp) {
    return knex('non_player_characters').insert({
      scene_id: scene_id,
      race_id: npc.race_id,
      name: npc.npc_name,
      current_hit_points: max_hp,
      initiative: npc.initiative,
      npc_notes: npc.npc_notes,
      current_effects: npc.current_effects,
      loot: npc.loot,
      active: true
    })
  },
  createItem: function(npc_id, name, item_notes, enhancement_amount, enhancement_target) {
    return knex('items').insert({
      id: DEFAULT,
      npc_id: npc_id,
      name: name,
      item_notes: item_notes,
      enhancement_amount: enhancement_amount,
      enhancement_target: enhancement_target
    })
  },
  createItemAbility: function(item_id, ability_id) {
    return knex('item_abilities').insert({
      id: DEFAULT,
      item_id: item_id,
      ability_id: ability_id
    })
  },
  createObstacle: function(scene_id, obstacle) {
    return knex('obstacles').insert({
      scene_id: scene_id,
      name: obstacle.name,
      perception_check: obstacle.perception_check,
      attack_roll: obstacle.attack_roll,
      attack_vs: obstacle.attack_vs,
      damage_roll: obstacle.damage_roll,
      obstacle_notes: obstacle.obstacle_notes,
      active: true
    })
  },

  //'READ' Queries
  getUsers: function() {
    return knex.select('id', 'email').from('users');
  },
  getOneUser: function(facebook_id) {
    return knex('users').where({facebook_id: facebook_id}).select('id').first();
  },
  getCampaigns: function(user_id) {
    return knex('campaigns').where({user_id: user_id}).select('id', 'name', 'active');
  },
  getOneCampaign: function(campaign_id) {
    return knex('campaigns').where({id: campaign_id}).first();
  },
  getEncounters: function(campaign_id) {
    return knex('encounters').where({campaign_id: campaign_id}).select('id', 'name', 'active');
  },
  getOneEncounter: function(encounter_id) {
    return knex('encounters').where({id: encounter_id}).first();
  },
  getScenes: function(encounter_id) {
    return knex('scenes').where({encounter_id: encounter_id}).select('id', 'name', 'setting_description', 'misc_loot', 'active');
  },
  getOneScene: function(scene_id) {
    return knex('scenes').where({id: scene_id});
  },
  getObstacles: function(scene_id) {
    return knex('obstacles').where({scene_id: scene_id});
  },
  getRaces: function() {
    return knex('races');
  },
  getOneRace: function(race_id) {
    return knex('races').where({id: race_id});
  },
  getPlayers: function(campaign_id) {
    return knex('player_characters').where({campaign_id: campaign_id, active: true});
  },
  getNPCs: function(scene_id) {
    //get race info with each npc
    return knex.raw(
      `SELECT
      non_player_characters.id AS npc_id,
      non_player_characters.scene_id AS scene_id,
      non_player_characters.race_id AS race_id,
      non_player_characters.name AS npc_name,
      non_player_characters.current_hit_points AS current_hit_points,
      non_player_characters.initiative AS initiative,
      non_player_characters.npc_notes AS npc_notes,
      non_player_characters.current_effects AS current_effects,
      non_player_characters.loot AS loot,
      non_player_characters.active AS npc_active,
      races.name AS race_name,
      races.max_hit_points AS max_hit_points,
      races.armor_class AS armor_class,
      races.xp_value AS xp_value,
      races.fortitude AS fortitude,
      races.reflex AS reflex,
      races.will AS will,
      races.speed AS speed,
      races.race_notes AS race_notes
      from non_player_characters
      LEFT JOIN races
      on non_player_characters.race_id = races.id
      WHERE scene_id = ${scene_id};`);
    },
  getRaceAbilities: function(race_id) {
    return knex.raw(
      `SELECT
      race_abilities.id AS race_abilities_id,
      race_abilities.race_id AS race_id,
      race_abilities.ability_id AS ability_id,
      abilities.name AS ability_name,
      abilities.type AS ability_type,
      abilities.range AS ability_range,
      abilities.attack_roll AS attack_roll,
      abilities.damage_roll AS damage_roll,
      abilities.ability_notes AS ability_notes
      FROM race_abilities
      LEFT JOIN abilities
      ON abilities.id = race_abilities.ability_id
      WHERE race_id = ${race_id}`);
  },
  getItems: function(npc_id) {
    return knex.raw(
      `SELECT
      item_abilities.id AS item_ability_id,
      item_abilities.item_id AS item_id,
      item_abilities.ability_id AS ability_id,
      items.npc_id AS npc_id,
      items.name AS item_name,
      items.item_notes AS item_notes,
      items.enhancement_amount AS enhancement_amount,
      items.enhancement_target AS enhancement_target,
      abilities.name AS ability_name,
      abilities.type AS type,
      abilities.range AS range,
      abilities.attack_roll AS attack_roll,
      abilities.damage_roll AS damage_roll,
      abilities.ability_notes AS ability_notes
      from item_abilities
      RIGHT JOIN items
      ON items.id = item_abilities.item_id
      JOIN abilities
      ON abilities.id = item_abilities.ability_id
      WHERE items.npc_id = ${npc_id}`);
  }

}
