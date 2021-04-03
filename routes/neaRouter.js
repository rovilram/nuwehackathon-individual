const express = require('express');

const router = express.Router();
/* const {
  getQuestion,
  postQuestion,
  putQuestion,
  delQuestion,
  getAllQuestions,
} = require('../controllers/questionController'); */

router
  .route('/')
  .post(() => {})
  .get(() => {});

module.exports = router;
