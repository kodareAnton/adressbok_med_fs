var express = require('express');
var router = express.Router();
var fs = require('fs')


router.get('/', function(req, res, next) {

  fs.readFile('users.json', function(err, data){
    if (err){
      console.log(err);
    }

    const users = JSON.parse(data)

    res.send(users)
    return;
  });
});

router.post('/add', function(req,res,next){

  fs.readFile('users.json', function(err, data){
    if (err){
      console.log(err, 'FEL!');
    }

    const users = JSON.parse(data)

    let newUser = {}

    users.push(newUser)

    fs.writeFile('users.json', JSON.stringify(users, null, 2), function(err){
      if (err){
        console.log(err, 'Fick ingen användare');
      }

      res.send(users)
      return;
    })
  })
})

module.exports = router;
