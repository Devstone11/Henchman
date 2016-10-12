
exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('items').insert({npc_id: 1, name: 'Ring of Fire', item_notes: 'A gold ring that glows red when activated, and engulfs the enemy in flames', enhancement_amount: '+2', enhancement_target: 'Attack'}),
    knex('items').insert({npc_id: 2, name: 'Helm of Thorns', item_notes: 'A light-armor helmet that protects against plant attacks', enhancement_amount: '+2', enhancement_target: 'AC'}),
    knex('items').insert({npc_id: 4, name: 'Divine Bow', item_notes: 'A shimmering white bow that can shoot through relatively thin walls', enhancement_amount: '+3', enhancement_target: 'Attack'})
  ]);
};
