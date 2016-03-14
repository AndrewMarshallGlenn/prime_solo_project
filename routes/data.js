var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');

router.get('/:id', function(req, res) {
  var results = [];

  pg.connect(connect, function(err, client, done) {
    var query = client.query('SELECT * FROM match_data WHERE user_id = $1', [req.params.id]);

    // Stream results back one row at a time
    query.on('row', function(row) {
      results.push(row);
    });

    // close connection
    query.on('end', function() {
      done();
      return res.json(results);
    });

    if(err) {
      console.log(err);
    }
  });
});

router.post('/', function(req, res) {
  console.log('Request Body: ', req.body);
  var addMatch = {
    id: req.body.userId,
    character: req.body.character,
    oCharacter: req.body.oCharacter,
    relStr: req.body.relStr,
    roundOne: req.body.roundOne,
    roundTwo: req.body.roundTwo,
    roundThree: req.body.roundThree,
    outcome: req.body.winLoss,
    notes: req.body.notes,
    antiAirs: req.body.antiAirs,
    execution: req.body.execution,
    crossUps: req.body.crossUps,
    wakeUp: req.body.wakeUp,
    okizeme: req.body.okizeme,
    teching: req.body.teching,
    spacing: req.body.spacing,
    footsies: req.body.footsies,
    hitConfirms: req.body.hitConfirms,
    hiLow: req.body.hiLow,
    reads: req.body.reads,
    gettingIn: req.body.gettingIn
  };
  pg.connect(connect, function(err, client, done) {
    console.log('this is the query');
    client.query(
      'INSERT INTO match_data ' +
      '(user_id, time, character, o_character, o_rel_str, rd_one, rd_two, rd_three, outcome, notes,' +
      ' anti_airs, execution, cross_ups, wake_up, okizeme, teching, spacing, footsies, hit_confirms,' +
      ' hi_low, reads, getting_in) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
      [addMatch.id,'now()', addMatch.character, addMatch.oCharacter, addMatch.relStr, addMatch.roundOne, addMatch.roundTwo, addMatch.roundThree,
        addMatch.outcome, addMatch.notes, addMatch.antiAirs, addMatch.execution, addMatch.crossUps, addMatch.wakeUp, addMatch.okizeme,
        addMatch.teching, addMatch.spacing, addMatch.footsies, addMatch.hitConfirms, addMatch.hiLow, addMatch.reads, addMatch.gettingIn],
      function(err, result) {
        done();
        if(err) {
          console.log(err);
          res.send(result);
        } else {
          res.send(result);
        }
      }
    )
  });
});


module.exports = router;