
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('abilities').insert({id: 1, name: 'Fire Blast', type: 'encounter', range: 'blast 3', attack_roll: '+3', attack_vs: 'Reflex', damage_roll: '2d10+3', ability_notes: 'Creatures affected are on fire and take 2 points of damage/turn. Saving throw ends.'}),
    knex('abilities').insert({id: 2, name: 'Shoot Through Walls', type: 'standard', range: '12', attack_roll: '+3', attack_vs: 'AC', damage_roll: '2d10+3', ability_notes: 'Can shoot an arrow through a wall less than 2 feet thick.'}),
    knex('abilities').insert({id: 3, name: 'Dryad Claws', type: 'standard', range: 'close', attack_roll: '+14', attack_vs: 'AC', damage_roll: '1d8+4', ability_notes: 'Damage increases to 1d8+9 if the target is the only enemy adjacent.'}),
    knex('abilities').insert({id: 4, name: 'Treestride', type: 'at-will', range: '', attack_roll: '', attack_vs: '', damage_roll: '', ability_notes: 'Move, teleportation. 8 squares if it begins and ends adjacent to a large tree or plant.'}),
    knex('abilities').insert({id: 5, name: 'Minotaur Battleaxe', type: 'standard', range: 'close', attack_roll: '+16', attack_vs: 'AC', damage_roll: '1d10+6', ability_notes: 'Target is marked until end of Minotaur\'s next turn.'}),
    knex('abilities').insert({id: 6, name: 'Goring Charge', type: 'charge', range: 'close', attack_roll: '+17', attack_vs: 'AC', damage_roll: '1d6+6', ability_notes: 'Target knocked prone.'}),
    knex('abilities').insert({id: 7, name: 'Speed of Dead', type: 'at-will', range: 'close', attack_roll: '+2', attack_vs: 'AC', damage_roll: '1d6', ability_notes: 'When making opportunity attack, +2 to attack and +1d6 to damage.'}),
    knex('abilities').insert({id: 8, name: 'Skeleton Longsword', type: 'standard', range: 'close', attack_roll: '+5', attack_vs: 'AC', damage_roll: '1d8+2', ability_notes: ''})
  ]);
};
