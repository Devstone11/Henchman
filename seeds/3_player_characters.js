
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('player_characters').insert({campaign_id: 1, name: 'Wild Bill', level: 3, class: 'Fighter', race: 'Human', speed: 4, xp: 3200, armor_class: 24, fortitude: 23, reflex: 18, will: 21, passive_insight: 11, passive_perception: 13, max_hit_points: 38, current_hit_points: 36, initiative: 0, current_effects: '', active: true}),
    knex('player_characters').insert({campaign_id: 1, name: 'Lone Ranger', level: 4, class: 'Ranger', race: 'Half-elf', speed: 4, xp: 3600, armor_class: 25, fortitude: 23, reflex: 18, will: 21, passive_insight: 11, passive_perception: 13, max_hit_points: 42, current_hit_points: 32, initiative: 0, current_effects: '', active: true}),
    knex('player_characters').insert({campaign_id: 1, name: 'Prospector Joe', level: 4, class: 'Cleric', race: 'Dwarf', speed: 4, xp: 3600, armor_class: 27, fortitude: 24, reflex: 17, will: 21, passive_insight: 11, passive_perception: 13, max_hit_points: 40, current_hit_points: 37, initiative: 0, current_effects: '', active: true})
  ]);
};
