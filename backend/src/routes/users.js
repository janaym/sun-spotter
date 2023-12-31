const router = require("express").Router();
const userQueries = require('../db/queries/01_users');

module.exports = db => {
  
  router.get('/users', (req, res) => {
    userQueries.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message })
    });
  });

  router.get('/users/:id', (req, res) => {
    const user_id = req.params.id;

    userQueries.getUserByID(user_id)
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res
      .status(500)
      .json({ error: err.message });
    })
  })

  router.get('/users/:id/visits', (req, res) => {
    const userID = req.params.id;
    userQueries.getVisitsByUser(userID)
    .then(visits => {
        res.json(visits)}) 
    .catch(error => {res
        .status(500)
        .json({error: error.message})
    });
  });

  router.get('/users/:id/saves', (req, res) => {
    const userID = req.params.id;
    userQueries.getSavesByUser(userID)
      .then(saves => {
        res.json(saves);
      })
      .catch(error => {
        res
          .status(500)
        .json({ error: error.message });
      });
  });
  
  return router;
};