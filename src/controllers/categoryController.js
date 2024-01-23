const categoryService = require('../services/categoryService');
const errorHandler = require('../errors/errorHandler'); 

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryService.createCategory({ name });
    res.status(201).json({ message: 'Category created successfully', category: newCategory });
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    res.status(200).json({ message: 'Categories retrieved successfully', categories });
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
      errorHandler.handleNotFoundError(res, 'Category');
    } else {
      res.status(200).json({ message: 'Category retrieved successfully', category });
    }
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const updatedCategory = await categoryService.updateCategoryById(req.params.id, req.body);
    if (!updatedCategory) {
      errorHandler.handleNotFoundError(res, 'Category');
    } else {
      res.status(200).json({ message: 'Category updated successfully', category: updatedCategory });
    }
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const deletedCategory = await categoryService.deleteCategoryById(req.params.id);
    if (!deletedCategory) {
      errorHandler.handleNotFoundError(res, 'Category');
    } else {
      res.status(200).json({ message: 'Category deleted successfully' });
    }
  } catch (error) {
    errorHandler.handleServerError(res, error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
  deleteCategoryById,
};
