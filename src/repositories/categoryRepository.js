const Category = require('../models/Category');

const createCategory = async (categoryData) => {
  return Category.create(categoryData);
};

const getAllCategories = async () => {
  return Category.find();
};

const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

const updateCategoryById = async (categoryId, updatedData) => {
  return Category.findByIdAndUpdate(categoryId, updatedData, { new: true });
};

const deleteCategoryById = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

const getCategoryByName = async (categoryName) => {
  return Category.findOne({ name: categoryName });
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
  getCategoryByName
};
