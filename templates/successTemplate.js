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
