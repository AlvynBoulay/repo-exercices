module.exports = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      return res.status(400).send('Erreur : ' + error.details[0].message);
    }
    req.body = value;
    next();
  };
};
