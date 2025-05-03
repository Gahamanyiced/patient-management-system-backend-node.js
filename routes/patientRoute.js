const express = require('express');
const router = express.Router();

const {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
} = require('../controllers/patientController');

// Base route for all patients
router.route('/')
  .post(createPatient)
  .get(getAllPatients);

// Routes for specific patient by ID
router.route('/:id')
  .get(getPatientById)
  .put(updatePatient)
  .delete(deletePatient);

module.exports = router;