const Patient = require('../models/Patient');

// Create a new patient
const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json({
      success: true,
      data: patient,
      message: 'Patient Info created successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    console.log(error.message);
  }
};

// Get all patients
const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      success: true,
      data: patients,
      message: 'Patient Info fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    console.log(error.message);
  }
};

// Get a single patient by ID
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    
    if (!patient) {
      return res.status(404).json({
        success: false,
        message: 'Patient not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: patient,
      message: 'Patient Info fetched successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    console.log(error.message);
  }
};

// Update a patient by ID
const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!patient) {
      return res.status(404).json({
        success: false,
        message: 'Patient not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: patient,
      message: 'Patient Info updated successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    console.log(error.message);
  }
};

// Delete a patient by ID
const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    
    if (!patient) {
      return res.status(404).json({
        success: false,
        message: 'Patient not found',
      });
    }
    
    await patient.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {},
      message: 'Patient Info deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    console.log(error.message);
  }
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientById,
  updatePatient,
  deletePatient,
};