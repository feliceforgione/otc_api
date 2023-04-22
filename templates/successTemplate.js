/**
 * Provides a function to create success responses
 * @module Success Template
 */

/**
 * Templete to provide success responses
 *
 * @param {Resonse} res Express Response object
 * @param {Object} result Result from API
 * @param {string} message Message about success response
 * @param {number} status Status code
 * @param {boolean} loggedIn User is logged in
 * @param {string} token JWT token
 * @returns {Object}
 */
const successTemplate = (
  res,
  result,
  message,
  status = 200,
  loggedIn,
  token
) => {
  return res.status(status).json({
    message: message,
    result: result,
    loggedIn: loggedIn,
    token: token,
  });
};

module.exports = successTemplate;
