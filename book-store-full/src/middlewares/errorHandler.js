export default (err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(409).json({
      statusCode: 409,
      message: "Bu email allaqachon ro'yxatdan o'tgan"
    });
  }

  res.status(err.statusCode || 500).json({
    statusCode: err.statusCode || 500,
    message: err.message || "Server xatosi"
  });
};
