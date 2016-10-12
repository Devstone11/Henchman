
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('obstacles').insert({scene_id: 3, name: 'False-Floor Pit', perception_check: '20', attack_roll: '+4', attack_vs: 'reflex', damage_roll: '1d10 falling', obstacle_notes: 'trigger with DC10 thievery, disable with DC25 thievery, jump over with DC11 athletics, climb out with DC15 athletics', active: true}),
    knex('obstacles').insert({scene_id: 3, name: 'Spear Gauntlet', perception_check: '20', attack_roll: '+7', attack_vs: 'AC', damage_roll: '1d8+3', obstacle_notes: 'Spears thrust up in 5 squares in the room. Jump over pressure plate DC6 athletics. Disable DC25 thievery.', active: true}),
    knex('obstacles').insert({scene_id: 2, name: 'Pendulum Scythes', perception_check: '22', attack_roll: '+9', attack_vs: 'AC', damage_roll: '2d8+4', obstacle_notes: 'Trap rolls initiative +6 when pressure plate triggered. Roll randomly to determine the row the trap attacks. DC22 Thievery to deactivate control panel.', active: true})
  ]);
};
