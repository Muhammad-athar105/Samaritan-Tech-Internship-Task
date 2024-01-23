const Car = require('../models/Car');

const createCar = async (carData) => {
  return Car.create(carData);
};

const getAllCars = async () => {
  return Car.find().populate('category');
};

const getCarById = async (carId) => {
  return Car.findById(carId).populate('category');
};

const updateCarById = async (carId, updatedData) => {
  return Car.findByIdAndUpdate(carId, updatedData, { new: true }).populate('category');
};

const deleteCarById = async (carId) => {
  return Car.findByIdAndDelete(carId);
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
};
