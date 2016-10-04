var knex = require('../db/knex');

module.exports = {
  //'CREATE' Queries
  createUser: function(email) {
    return knex('users').insert({
      id: DEFAULT,
      email: email
    })
  }
  createCampaign: function(user_id, name) {
    return knex('campaigns').insert({
      id: DEFAULT,
      user_id: user_id,
      name: name,
      active: true
    })
  },
  createEncounter: function(campaign_id, name) {
    return knex('encounters').insert({
      id: DEFAULT,
      campaign_id: campaign_id,
      name: name,
      active: true
    })
  },
  createPlayerCharacter: function(campaign_id, name, level, pcClass, race, speed, xp, ac, fort, ref, will, passive_insight, passive_perception, max_hp) {
    return knex('player_characters').insert({
      id: DEFAULT,
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
  createScene: function(encounter_id, name, setting_desc, loot) {
    return knex('scenes').insert({
      id: DEFAULT,
      encounter_id: encounter_id,
      name: name,
      setting_description: setting_desc,
      misc_loot: loot,
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
  createNonPlayerCharacter: function(scene_id, race_id, name, initiative, npc_notes, current_effects, loot) {
    var max_hit_points = knex('races').where({id: race_id}).select('max_hit_points');
    return knex('non_player_characters').insert({
      id: DEFAULT,
      scene_id: scene_id,
      race_id: race_id,
      name: name,
      current_hit_points: max_hit_points,
      initiative: initiative,
      npc_notes: npc_notes,
      current_effects: current_effects,
      loot: loot,
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
  createObstacle: function(scene_id, name, perception_check, attack_roll, attack_vs, damage_roll, obstacle_notes) {
    return knex('obstacles').insert({
      id: DEFAULT,
      scene_id: scene_id,
      name: name,
      perception_check: perception_check,
      attack_roll: attack_roll,
      attack_vs: attack_vs,
      damage_roll: damage_roll,
      obstacle_notes,
      active: true
    })
  }
}
