import { Router } from 'express'

var pgp = require('pg-promise')( /*options*/ )
pgp.pg.defaults.ssl = true;
var db = pgp(process.env.DATABASE_URL)

var router = Router()

/* GET abyat listing. */
router.get('/abyat', function(req, res, next) {
  db.many('SELECT * from abyat LIMIT 20')
    .then(function(data) {
      res.json(data)
    })
    .catch(function(error) {
      console.log('ERROR:', error)
    })
})

router.get('/abyat/page/:page', function(req, res, next) {
  var page = parseInt(req.params.page)
  db.many('SELECT * from abyat LIMIT 20 OFFSET $1', page * 20)
    .then(function(data) {
      res.json(data)
    })
    .catch(function(error) {
      console.log('ERROR:', error)
    })
})

router.get('/abyat/poet/:name', function(req, res, next) {
  var name = req.params.name
  db.any('SELECT * from abyat WHERE sh = $1', name)
    .then(function(data) {
      res.json(data)
    })
    .catch(function(error) {
      console.log('ERROR:', error)
    })
})

/* GET user by ID. */
router.get('/abyat/:beyt', function(req, res, next) {
  var beyt = req.params.beyt
  db.one('SELECT * from abyat WHERE id = $1', beyt)
    .then(function(data) {
      res.json(data)
    })
    .catch(function(error) {
      console.log('ERROR:', error)
    })
})

export default router