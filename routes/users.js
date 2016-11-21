var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var pg = require('pg');
var Users = require('../data/CRqueries');
var cors = require('cors');

router.use(cors());

/* GET users listing. */
router.get('/', function(req, res, next) {
  Users.getUsers().then(function(users) {
    console.log(users);
    res.send(users);
  })
});

router.get('/:id', function(req, res, next) {
  Users.getOneUser(req.query.userId).then(function(user) {
    if (user.length > 0) {
      Users.getCampaigns(user[0].id).then(function(campaigns) {
        res.send(campaigns);
      })
    } else {
      Users.createUser(req.query.userId).then(function() {
        res.send([]);
      })
    }
  })
});

module.exports = router;
