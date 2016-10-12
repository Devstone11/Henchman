
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('races').insert({name: 'Dryad', max_hit_points: 92, armor_class: 23, xp_value: 200, fortitude: 22, reflex: 21, will: 21, speed: 8, race_notes: 'Often found guarding certain natural landmarks. Bluff +10'}),
    knex('races').insert({name: 'Minotaur', max_hit_points: 106, armor_class: 25, xp_value: 300, fortitude: 24, reflex: 18, will: 20, speed: 5, race_notes: 'A large half-man, half-beast.'}),
    knex('races').insert({name: 'Skeleton', max_hit_points: 45, armor_class: 18, xp_value: 70, fortitude: 15, reflex: 16, will: 15, speed: 5, race_notes: 'Undead warrior'})
  ]);
};
