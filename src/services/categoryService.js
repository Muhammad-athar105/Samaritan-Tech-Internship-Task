const categoryRepository = require('../repositories/categoryRepository');

const createCategory = async (categoryData) => {
  const existingCategory = await categoryRepository.getCategoryByName(categoryData.name);

  if (existingCategory) {
    return { error: 'Category with the same name already exists' };
  }
  return categoryRepository.createCategory(categoryData);
};

const getAllCategories = async () => {
  return categoryRepository.getAllCategories();
};

const getCategoryById = async (categoryId) => {
  return categoryRepository.getCategoryById(categoryId);
};

const updateCategoryById = async (categoryId, updatedData) => {
  return categoryRepository.updateCategoryById(categoryId, updatedData);
};

const deleteCategoryById = async (categoryId) => {
  return categoryRepository.deleteCategoryById(categoryId);
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
