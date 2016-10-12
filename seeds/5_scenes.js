
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('scenes').insert({encounter_id: 1, name: 'Puzzle Chamber', setting_description: 'A large cavern with three puzzles that the party must solve. When they solve the puzzle, a door opens to the next chamber.', misc_loot: '3 rubies and a silver sword.', active: true}),
    knex('scenes').insert({encounter_id: 1, name: 'Skeleton Bridge', setting_description: 'A land bridge spans a cavern. It\'s about 200 feet long. 40 feet from each side, there are skeletons lined up with slings, and they huck rocks at the adventurers.', misc_loot: 'None.', active: true}),
    knex('scenes').insert({encounter_id: 1, name: 'Deep Glade', setting_description: 'Deeper in the cave, a strange underground oak forest. Dryads guard a silver pool and attack on approach. A minotaur bursts from the ground when the dryads are slain.', misc_loot: 'A large chest holds 300gp and 5 healing potions.', active: true})
  ]);
};
