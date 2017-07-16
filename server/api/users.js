import {
  Router
} from 'express'

var pgp = require('pg-promise')( /*options*/ )
pgp.pg.defaults.ssl = true;
var db = pgp(process.env.DATABASE_URL)

var router = Router()

// Mock Users
const users = [{
    name: 'Alexandre'
  },
  {
    name: 'Sébastien'
  }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  db.many('SELECT sh from abyat')
    .then(function (data) {
      console.log('DATA:', data)
      res.json(data)
    })
    .catch(function (error) {
      console.log('ERROR:', error)
    })
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  var id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router