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

router.get('/chardata/:character/:id', function(req, res) {
  var results = [];
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
  console.log('get character:', req.params.character);
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
      'WHERE user_id = $1 AND match_data.character_id = $2' +
      'GROUP BY match_data.id, player.character, player.image, opponent.character, opponent.image '+
      'ORDER BY match_data.time DESC;', [req.params.id, req.params.character]);


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

router.get('/chartag/:character/:id', function(req, res) {
  var results = [];

  console.log('get character:', req.params.character);
  console.log('get id:', req.params.id);

  pg.connect(connect, function(err, client, done) {
    var query = client.query('SELECT COUNT(tags_match.match_id) AS count, tags_match.tags_id, improvement_tags.tags '+
      'FROM tags_match '+
      'JOIN match_data ON tags_match.match_id = match_data.id '+
      'JOIN improvement_tags ON tags_match.tags_id = improvement_tags.id '+
      'JOIN users ON match_data.user_id = users.id '+
      'WHERE match_data.character_id = $1 AND users.id = $2 '+
      'GROUP BY tags_match.tags_id, improvement_tags.tags '+
      'ORDER BY count DESC', [req.params.character ,req.params.id]);


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

router.get('/winpercent/:id', function(req, res) {
  var results = [];

  pg.connect(connect, function(err, client, done) {
    var query = client.query('Select outcome, (Count(outcome)* 100 / (Select Count(*) From match_data)) as win_percent '+
    'From match_data '+
    'WHERE user_id = $1 '+
    'Group By outcome', [req.params.id]);

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

router.get('/winpercentlastn/:id', function(req, res) {
  var results = [];

  pg.connect(connect, function(err, client, done) {
    var query = client.query('Select outcome '+
    'From match_data '+
    'WHERE user_id = $1 '+
    'ORDER BY match_data.id DESC LIMIT 25', [req.params.id]);

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

router.get('/top3/:id', function(req, res) {
  var results = [];

  pg.connect(connect, function(err, client, done) {
    var query = client.query('Select characters.character, count(*) as count, characters.image '+
    'From match_data '+
    'JOIN characters ON match_data.character_id = characters.id '+
    'WHERE user_id = $1 '+
    'GROUP BY character, image '+
    'ORDER BY count DESC LIMIT 3;', [req.params.id]);

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
    aoiTags: req.body.aoiTags
  };
  console.log(addMatch.character);
  console.log(req.body.character.charId);
  pg.connect(connect, function(err, client, done) {
    console.log('this is the query');
    var queryVar = 'INSERT INTO match_data ' +
      '(user_id, time, character_id, o_character_id, o_rel_str, rd_one, rd_two, rd_three, outcome, notes) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id';
    client.query(queryVar,
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
          var queryVarTwo = 'INSERT INTO tags_match (tags_id, match_iD) VALUES ';
          for(var i = 0; i < addMatch.aoiTags.length; i++){
            queryVarTwo += '(' + addMatch.aoiTags[i] + ',' + addMatch.matchId + '), ';
          }
          queryVarTwo = queryVarTwo.slice(0, -2);
          console.log(queryVarTwo);
          client.query(queryVarTwo,
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