// controllers/carController.js
const carService = require('../services/carService');
const errorHandler = require('../errors/errorHandler');

const createCar = async (req, res) => {
  try {
    const { make, model, year } = req.body;
    // Check if the same car already exists
    const existingCar = await carService.createCar({ make, model, year });

    if (existingCar) {
      return errorHandler.handleValidationError(res, 'Car already exists');
    }

    const result = await carService.createCar(req.body);
    return result.error
      ? errorHandler.handleValidationError(res, result.error)
      : res.status(201).json({ message: 'Car created successfully', car: result });
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

const getAllCars = async (req, res) => {
  try {
    const cars = await carService.getAllCars();
    res.status(200).json({ message: 'Cars retrieved successfully', cars });
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await carService.getCarById(req.params.id);
    return car
      ? res.status(200).json({ message: 'Car retrieved successfully', car })
      : errorHandler.handleNotFoundError(res, 'Car');
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

const updateCarById = async (req, res) => {
  try {
    const result = await carService.updateCarById(req.params.id, req.body);

    if (result.error) {
      res.status(400).json({ error: result.error });
    } else {
      res.status(200).json({ message: 'Car updated successfully', car: result });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update car', details: error.message });
  }
};

const deleteCarById = async (req, res) => {
  try {
    const deletedCar = await carService.deleteCarById(req.params.id);
    return deletedCar
      ? res.status(200).json({ message: 'Car deleted successfully' })
      : errorHandler.handleNotFoundError(res, 'Car');
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
};
