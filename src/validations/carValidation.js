const { body, validationResult } = require('express-validator');

// Validation middleware for POST
const createCarValidation = [
  body('category').isMongoId().withMessage('Category must be a valid ObjectId'),
  body('color').notEmpty().withMessage('Color is required').isString().withMessage('Color must be a string'),
  body('model').optional().isString().withMessage('Model must be a string'),
  body('make').optional().isString().withMessage('Make must be a string'),
  body('registrationNo')
    .optional()
    .isString().withMessage('Registration number must be a string')
    .isLength({ min: 6, max: 20 }).withMessage('Registration number must be between 6 and 20 characters'),
];

// Validation middleware for PUT
const updateCarValidation = [
  body('category').optional().isMongoId().withMessage('Category must be a valid ObjectId'),
  body('color').optional().notEmpty().withMessage('Color is required').isString().withMessage('Color must be a string'),
  body('model').optional().isString().withMessage('Model must be a string'),
  body('make').optional().isString().withMessage('Make must be a string'),
  body('registrationNo')
    .optional()
    .isString().withMessage('Registration number must be a string')
    .isLength({ min: 6, max: 20 }).withMessage('Registration number must be between 6 and 20 characters'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  createCarValidation,
  updateCarValidation,
  validate,
};
