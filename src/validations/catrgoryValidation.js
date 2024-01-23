const { body, validationResult } = require('express-validator');

// Validation for POST
const createCategoryValidation = [
  body('name')
    .isString().withMessage('Category name is required, so use a valid name')
    .trim() 
    .notEmpty().withMessage('Category name cannot be empty')
    .isLength({ min: 3, max: 50 }).withMessage('Category name must be between 3 and 50 characters'),
];

// Validation for PUT
const updateCategoryValidation = [
  body('name')
    .isString().withMessage('Category name must be a valid string')
    .trim()
    .isLength({ min: 3, max: 50 }).withMessage('Category name must be between 3 and 50 characters'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  createCategoryValidation,
  updateCategoryValidation,
  validate,
};
