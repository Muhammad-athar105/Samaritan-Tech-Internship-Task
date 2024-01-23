// errorHandler.js

const handleErrorResponse = (res, statusCode, error) => {
  res.status(statusCode).json({ error });
};

const handleServerError = (res, error) => {
  console.error(error);
  handleErrorResponse(res, 500, 'Internal Server Error');
};

const handleNotFoundError = (res, resourceName) => {
  handleErrorResponse(res, 404, `${resourceName} not found`);
};

const handleValidationError = (res, error) => {
  handleErrorResponse(res, 400, error);
};

module.exports = {
  handleErrorResponse,
  handleServerError,
  handleNotFoundError,
  handleValidationError,
};
