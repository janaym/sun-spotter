const router = require("express").Router();
const multerExport = require("../services/multer");
const visitQueries = require('../db/queries/03_visits');
const visitlabelQueries = require('../db/queries/07_visit_labels');
const commentQueries = require('../db/queries/05_comments');

module.exports = db => {
  // GET /api/visits/:id
  router.get("/visits/:id", async (req, res) => {
    try {
      const visitId = req.params.id;
      const visit = await visitQueries.getOneVisit(visitId);
      res.json(visit);
    } catch (error) {
      console.error('Sorry, we could not complete your request: ', error);
      throw error;
    }
  });

  // GET /api/visits/:id/labels
  router.get("/visits/:id/labels", async (req, res) => {
    try {
      const visitId = req.params.id;
      const visit = await visitlabelQueries.getOneVisitLabels(visitId);
      res.json(visit);
    } catch (error) {
      console.error('Sorry, we could not complete your request: ', error);
      throw error;
    }
  });

  // GET /api/visits/:id/comments
  router.get("/visits/:id/comments", async (req, res) => {
    try {
      const visitId = req.params.id;
      const comments = await commentQueries.getVisitComments(visitId);
      res.json(comments);
    } catch (error) {
      console.error('Sorry, we could not complete your request: ', error);
      throw error;
    }
  });

  router.get("/visits/totalVisits/:id", (req, res) => {
    const user_id = req.params.id;

    visitQueries
    .totalVisits(user_id)
    .then((result) => {
      const totalVisits = result.rows[0].total_visits;
      res.status(200).json({ message: "Saves successfully counted", total: totalVisits });
    })
    .catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

  // POST /api/visits/:id/comments
  router.post("/visits/:id/comments", async (req, res) => {
    try {
      const comment = req.body;
      comment.visit_id = req.params.id;

      await commentQueries.createComment(comment);
      res.status(200).json({ message: "Comment Added!" });
    } catch (error) {
      console.error('Sorry, we could not complete your request: ', error);
      throw error;
    }
  });

  // POST /api/visits
  router.post("/visits", multerExport.uploadImg.single("file"), async (req, res) => {
    try {
      const data = JSON.parse(req.body.data);
      const file = req.file; // to get file name

      const newVisit = data.visit;
      const newVisitLabels = data.labels;

      // add details to new Visit
      newVisit.time_stamp = newVisit.time_stamp.replace("T", " ");
      newVisit.image_url = 'images/' + file.originalname;

      const visit = await visitQueries.createVisit(newVisit);

      // add visit id to all visit label pairs
      const visitIdAdded = newVisitLabels.map(obj => ({ ...obj, visit_id: visit.id }));

      // create array of add visit label queries to be executed
      const visitLabelQueryList = [];
      for (const item of visitIdAdded) {
        visitLabelQueryList.push(visitlabelQueries.addVisitLabels(item));
      }
      // create promise for all visit label insert queries
      await Promise.all(visitLabelQueryList);

      res.status(200).json({ message: "Visit Created!" });
    } catch (error) {
      console.error('Sorry, we could not complete your request: ', error);
      throw error;
    }
  });

  return router;
};