const errorHandler = (err, req, res, next) => {
  console.log(err);

  res.status(500).json({
    statusCode: 500,
    message: "Server error",
  });
};

export default errorHandler;