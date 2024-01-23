const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');
const carValidation = require('../validations/carValidation');

// Routes
router.post('/cars/create', carValidation.createCarValidation, carValidation.validate, carController.createCar);
router.get('/cars', carController.getAllCars);
router.get('/cars/:id', carController.getCarById);
router.put('/cars/:id', carValidation.updateCarValidation, carValidation.validate, carController.updateCarById);
router.delete('/cars/:id', carController.deleteCarById);

module.exports = router;
