const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode ?? 500;

  if(Math.floor(statusCode / 100) === 2) statusCode = 400

  res.status(statusCode);

  res.json({
    error: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {errorHandler};
