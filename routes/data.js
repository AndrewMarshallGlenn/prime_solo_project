var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');

router.get('/:id', function(req, res) {
  var results = [];

  console.log('get id:', req.params.id);

  pg.connect(connect, function(err, client, done) {
    var query = client.query('SELECT match_data.time, match_data.o_rel_str, match_data.rd_one, match_data.rd_two, match_data.rd_three, '+
    'match_data.outcome, match_data.notes, player.character, player.image, opponent.character AS o_char, opponent.image AS o_img, '+
      'string_agg(improvement_tags.tags, \', \') '+
    'FROM match_data ' +
    'LEFT JOIN tags_match ON match_data.id = tags_match.match_id '+
    'LEFT JOIN improvement_tags ON tags_match.tags_id = improvement_tags.id '+
    'JOIN characters AS player ON player.id = match_data.character_id  '+
    'JOIN characters AS opponent ON opponent.id = match_data.o_character_id '+
    'WHERE user_id = $1 '+
    'GROUP BY match_data.id, player.character, player.image, opponent.character, opponent.image '+
    'ORDER BY match_data.time DESC;', [req.params.id]);

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
      console.log('select error: ', err);
    }
  });
});

router.get('/stats/:id', function(req, res) {
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
    character: req.body.character.charId,
    oCharacter: req.body.oCharacter.charId,
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
  console.log(addMatch.character);
  console.log(req.body.character.charId);
  pg.connect(connect, function(err, client, done) {
    console.log('this is the query');
    client.query(
      'INSERT INTO match_data ' +
      '(user_id, time, character_id, o_character_id, o_rel_str, rd_one, rd_two, rd_three, outcome, notes) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id',
      [addMatch.id,'now()', addMatch.character, addMatch.oCharacter, addMatch.relStr, addMatch.roundOne, addMatch.roundTwo, addMatch.roundThree,
        addMatch.outcome, addMatch.notes],
      function(err, result) {
        done();
        if(err) {
          console.log(err);
          res.send(result);
        } else {
          addMatch.matchId = result.rows[0].id;
          console.log('result: ' + result);
          client.query(
          'INSERT INTO tags_match ' +
          '(tags_id, match_id) ' +
          'VALUES ($1, $2), ($3, $4), ($5, $6), ($7, $8), ($9, $10), ($11, $12), ' +
          '($13, $14), ($15, $16), ($17, $18), ($19, $20), ($21, $22), ($23, $24)',
          [addMatch.antiAirs, addMatch.matchId, addMatch.execution, addMatch.matchId, addMatch.crossUps, addMatch.matchId, addMatch.wakeUp, addMatch.matchId,
            addMatch.okizeme, addMatch.matchId, addMatch.teching, addMatch.matchId, addMatch.spacing, addMatch.matchId, addMatch.footsies, addMatch.matchId,
            addMatch.hitConfirms, addMatch.matchId, addMatch.hiLow, addMatch.matchId, addMatch.reads, addMatch.matchId, addMatch.gettingIn, addMatch.matchId],
          function(err, result) {
            done();
            if(err) {
              console.log('post error: ', err);
              res.send(result);
            } else {
              console.log('done posting');
              res.send(result);
            }
          }
        );
        }
      }
    )
  });
});


module.exports = router;