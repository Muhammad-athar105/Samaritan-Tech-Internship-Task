const carRepository = require('../repositories/carRepository');

const createCar = async (carData) => {
  // Validate required fields
  if (!carData.category || !carData.color) {
    return { error: 'Category and color are required fields.' };
  }

  // Validate other conditions as needed

  return carRepository.createCar(carData);
};

const getAllCars = async () => {
  return carRepository.getAllCars();
};

const getCarById = async (carId) => {
  return carRepository.getCarById(carId);
};

const updateCarById = async (carId, updatedData) => {
  return carRepository.updateCarById(carId, updatedData);
};

const deleteCarById = async (carId) => {
  return carRepository.deleteCarById(carId);
};

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  updateCarById,
  deleteCarById,
};
