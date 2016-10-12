
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('non_player_characters').insert({scene_id: 3, race_id: 1, name: 'Dryad-1', current_hit_points: 92, initiative: 19, npc_notes: '', current_effects: 'disguised as Eladrin woman when first approached', loot: '3 gemstones', active: true}),
    knex('non_player_characters').insert({scene_id: 3, race_id: 1, name: 'Dryad-2', current_hit_points: 88, initiative: 24, npc_notes: '', current_effects: 'disguised as Eladrin woman when first approached', loot: '10gp', active: true}),
    knex('non_player_characters').insert({scene_id: 3, race_id: 2, name: 'Minotaur', current_hit_points: 106, initiative: 21, npc_notes: 'When dryads are in mid-combat, bursts out of the dirt wall and attacks with a roar.', current_effects: '', loot: '', active: true}),
    knex('non_player_characters').insert({scene_id: 2, race_id: 3, name: 'Skeleton-1', current_hit_points: 45, initiative: 12, npc_notes: 'Shoots adventurers with a sling as they cross the bridge.', current_effects: '', loot: 'Sling', active: true}),
    knex('non_player_characters').insert({scene_id: 2, race_id: 3, name: 'Skeleton-2', current_hit_points: 45, initiative: 8, npc_notes: 'Shoots adventurers with a sling as they cross the bridge.', current_effects: '', loot: 'Sling', active: true}),
    knex('non_player_characters').insert({scene_id: 2, race_id: 3, name: 'Skeleton-3', current_hit_points: 45, initiative: 17, npc_notes: 'Shoots adventurers with a sling as they cross the bridge.', current_effects: '', loot: 'Sling', active: true})
  ]);
};
