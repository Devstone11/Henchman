var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');
var CRQueries = require('../data/CRQueries');
var UDQueries = require('../data/UDQueries');
var cors = require('cors');

router.use(cors());

//READ ROUTES
router.get('/campaigns/:id', function(req, res, next) {
  CRQueries.getEncounters(req.params.id).then(function(encounters) {
    CRQueries.getOneCampaign(req.params.id).then(function(campaign) {
      res.send({encounters: encounters, campaign: campaign});
    })
  })
});

router.get('/encounters/:id', function(req, res, next) {
  CRQueries.getScenes(req.params.id).then(function(scenes) {
    CRQueries.getOneEncounter(req.params.id).then(function(encounter) {
      res.send({scenes: scenes, encounter: encounter});
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

router.get('/races/', function(req, res, next) {
  CRQueries.getRaces().then(function(races) {
    res.send(races);
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

//UPDATE ROUTES

router.post('/campaigns/:id', function(req, res, next) {
  UDQueries.updateCampaign(req.body, req.params.id).then(function() {
    res.send({status: 200});
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
  UDQueries.updateNPC(req.body, req.params.npc_id).then(function() {
    res.send({status: 200});
  })
})

//CREATE ROUTES

//******HARD-CODED USER ID HERE!!!
router.post('/campaigns/new/:user_id', function(req, res, next) {
  CRQueries.getOneUser(req.body.userId).then(function(user) {
    CRQueries.createCampaign(user.id, req.body.name).then(function() {
      res.send({status: 200});
    })
  })
});

router.post('/encounters/new/:campaign_id', function(req, res, next) {
  CRQueries.createEncounter(req.params.campaign_id, req.body.name).then(function() {
    res.send({status: 200});
  })
});

router.post('/scenes/new/:encounter_id', function(req, res, next) {
  CRQueries.createScene(req.params.encounter_id, req.body).then(function() {
    res.send({status: 200});
  })
});

router.post('/npcs/new/:scene_id', function(req, res, next) {
  CRQueries.getOneRace(req.body.race_id).then(function(race) {
    CRQueries.createNonPlayerCharacter(req.params.scene_id, req.body, race[0].max_hit_points).then(function() {
      res.send({status: 200});
    })
  })
});

router.post('/obstacles/new/:scene_id', function(req, res, next) {
  CRQueries.createObstacle(req.params.scene_id, req.body).then(function() {
    console.log('obstacle successfully created!');
    res.send({status: 200});
  })
});

//DESTROY ROUTES

router.post('/campaigns/delete/:camp_id', function(req, res, next) {
  CRQueries.getOneUser(req.body.userId).then(function(user) {
    CRQueries.getOneCampaign(req.params.camp_id).then(function(campaign) {
      if (user.id === campaign.user_id) {
        process.setMaxListeners(0);
        Promise.all([
          UDQueries.deleteCampaignPCs(req.params.camp_id),
          UDQueries.deleteCampaignObstacles(req.params.camp_id),
          UDQueries.deleteCampaignNPCs(req.params.camp_id),
          UDQueries.deleteCampaignScenes(req.params.camp_id),
          UDQueries.deleteCampaignEncounters(req.params.camp_id),
          UDQueries.deleteCampaign(req.params.camp_id)
        ]).then(function() {
          res.send({status: 200});
        });
      } else {
        res.send({status: 500, message: "incorrect user permissions"});
      }
    })
  })
});

router.post('/encounters/delete/:encounter_id', function(req, res, next) {
  CRQueries.getOneUser(req.body.userId).then(function(user) {
    CRQueries.getOneEncounter(req.params.encounter_id).then(function(encounter) {
      CRQueries.getOneCampaign(encounter.campaign_id).then(function(campaign) {
        if (user.id === campaign.user_id) {
          process.setMaxListeners(0);
          Promise.all([
            UDQueries.deleteEncounterNPCs(req.params.encounter_id),
            UDQueries.deleteEncounterObstacles(req.params.encounter_id),
            UDQueries.deleteEncounterScenes(req.params.encounter_id),
            UDQueries.deleteEncounter(req.params.encounter_id)
          ]).then(function() {
            res.send({status: 200});
          });
        } else {
          res.send({status: 500, message: "incorrect user permissions"});
        }
      })
    })
  })
})

router.post('/scenes/delete/:scene_id', function(req, res, next) {
  CRQueries.getOneUser(req.body.userId).then(function(user) {
    CRQueries.getSceneCampaign(req.params.scene_id).then(function(campaign) {
      if (user.id === campaign.rows[0].user_id) {
        process.setMaxListeners(0);
        Promise.all([
          UDQueries.deleteSceneNPCs(req.params.scene_id),
          UDQueries.deleteSceneObstacles(req.params.scene_id),
          UDQueries.deleteScene(req.params.scene_id)
        ]).then(function() {
          res.send({status: 200});
        });
      } else {
        res.send({status: 403});
      }
    })
  })
})

module.exports = router;
