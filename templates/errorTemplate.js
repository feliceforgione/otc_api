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
