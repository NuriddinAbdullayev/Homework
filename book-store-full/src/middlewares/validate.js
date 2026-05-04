export default (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      statusCode: 400,
      message: "Validatsiya xatosi",
      errors: result.error.errors.map(e => ({
        field: e.path[0],
        message: e.message
      }))
    });
  }

  req.body = result.data;
  next();
};
