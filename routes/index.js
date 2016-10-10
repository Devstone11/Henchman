var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');
var CRQueries = require('../data/CRQueries');
var UDQueries = require('../data/UDQueries');
var cors = require('cors');

router.use(cors());

/* GET home page. */
router.get('/campaigns/:id', function(req, res, next) {
  CRQueries.getEncounters(req.params.id).then(function(encounters) {
    res.send(encounters);
  })
});

router.get('/encounters/:id', function(req, res, next) {
  CRQueries.getScenes(req.params.id).then(function(scenes) {
    res.send(scenes);
  })
});

router.get('/obstacles/:scene_id', function(req, res, next) {
  CRQueries.getObstacles(req.params.scene_id).then(function(obstacles) {
    res.send(obstacles);
  })
});

router.get('/npcs/:scene_id', function(req, res, next) {
  CRQueries.getNPCs(req.params.scene_id).then(function(npcs) {
    res.send(npcs.rows);
  })
});

router.get('/race_abilities/:race_id', function(req, res, next) {
  CRQueries.getRaceAbilities(req.params.race_id).then(function(race_abilities) {
    res.send(race_abilities);
  })
});

router.get('/items/:npc_id', function(req, res, next) {
  CRQueries.getItems(req.params.npc_id).then(function(items) {
    res.send(items);
  })
});

router.get('/players/:campaign_id', function(req, res, next) {
  CRQueries.getPlayers(req.params.campaign_id).then(function(players) {
    res.send(players);
  })
})

//THE BELOW ROUTE NOT FUNCTIONAL
// router.get('/scenes/:id', function(req, res, next) {
//   var results = {
//     obstacles: [],
//     npcs: []
//   };
//   CRQueries.getObstacles(req.params.id).then(function(obstacles) {
//     results.obstacles = obstacles;
//     CRQueries.getNPCs(req.params.id).then(function(npcs) {
//
//       Promise.all(
//         npcs.rows.map(function(npc) {
//           var npcObj = {};
//           npcObj.stats = npc;
//           npcObj.race_abilities = [];
//           npcObj.items = [];
//           return CRQueries.getRaceAbilities(npc.race_id).then(function(race_abilities) {
//             race_abilities.rows.forEach(function(race_ability) {
//               npcObj.race_abilities.push(race_ability);
//             })
//             CRQueries.getItems(npc.npc_id).then(function(items) {
//               items.rows.forEach(function(item) {
//                 npcObj.items.push(item);
//               })
//               return npcObj;
//             })
//           })
//         })
//       ).then(function(npcObjs) {
//         npcObjs.forEach(function(npcObj) {
//           results.npcs.push(npcObj);
//         });
//         res.send(results);
//       })
//     })
//   })
// });

module.exports = router;
