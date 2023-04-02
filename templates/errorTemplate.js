const errorTemplate = (res, err, message = "none") => {
  return res.status(501).json({
    error: {
      message: message,
      error: err,
      status: err.status,
    },
  });
};

module.exports = errorTemplate;
