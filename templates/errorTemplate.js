/**
 * Provides a function to create error responses
 * @module Error Template
 */

/**
 * Template to provide error responses
 *
 * @param {Response} res Express Response Object
 * @param {Error} err Error Object
 * @param {string} message Message about error
 * @param {number} status Response status code
 * @returns {Object}
 */
const errorTemplate = (res, err, message = "none", status = 501) => {
  return res.status(status).json({
    error: {
      message: message,
      error: err,
      status: err.status,
    },
  });
};

module.exports = errorTemplate;
