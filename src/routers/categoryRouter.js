const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const categoryValidation = require('../validations/catrgoryValidation');


// Routes
router.post('/categories/create', categoryValidation.createCategoryValidation, categoryValidation.validate, categoryController.createCategory);
router.get('/categories', categoryController.getAllCategories);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories/:id', categoryValidation.updateCategoryValidation, categoryValidation.validate, categoryController.updateCategoryById);
router.delete('/categories/:id', categoryController.deleteCategoryById);

module.exports = router;
