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
    res.send(users);
  })
});

router.get('/:id', function(req, res, next) {
  Users.getCampaigns(req.params.id).then(function(campaigns) {
    res.send(campaigns);
  })
});

module.exports = router;
