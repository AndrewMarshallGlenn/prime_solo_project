var express = require('express');
var router = express.Router();
var pg = require('pg');
var connect = require('../modules/connection');

router.get('/', function(req, res) {
  var results = [];

  pg.connect(connect, function(err, client, done) {
    var query = client.query('SELECT * FROM favorites');

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

  pg.connect(connect, function(err, client, done) {
    client.query(
      'INSERT INTO match_data ' +
      '(time, character, o_character, o_rel_str, rd_one, rd_two, rd_three, outcome, notes,' +
      ' anti_airs, execution, cross_ups, wake_up, okizeme, teching, spacing, footsies, hit_confirms,' +
      ' hi_low, reads, getting_in, user_id) ' +
      'VALUES ($1, $2, $3, $4, $5, $6, $6, $7, $8 $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)',
      [req.body.petfinderID, req.body.petName, req.body.petImageURL, req.body.description],
      function(err, result) {
        done();
        if(err) {
          res.send(result);
        } else {
          res.send(result);
        }
      }
    )
  });
});


module.exports = router;