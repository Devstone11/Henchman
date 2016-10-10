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
    CRQueries.getOneEncounter(req.params.id).then(function(encounter) {
      res.send({scenes: scenes, encounter: encounter[0]});
    })
  })
});

router.get('/scenes/:id', function(req, res, next) {
  CRQueries.getOneScene(req.params.id).then(function(scene) {
    res.send(scene[0]);
  })
})

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

router.post('/encounters/:id', function(req, res, next) {
  UDQueries.updateEncounter(req.body, req.params.id).then(function() {
    res.send({status: 200});
  })
})

router.post('/scenes/:id', function(req, res, next) {
  UDQueries.updateScene(req.body, req.params.id).then(function() {
    res.send({status: 200});
  })
})

router.post('/players/:player_id', function(req, res, next) {
  UDQueries.updatePlayer(req.body, req.params.player_id).then(function() {
    res.send({status: 200});
  })
})

router.post('/npcs/:npc_id', function(req, res, next) {
  console.log(req.body);
  UDQueries.updateNPC(req.body, req.params.npc_id).then(function() {
    res.send({status: 200});
  })
})

module.exports = router;
