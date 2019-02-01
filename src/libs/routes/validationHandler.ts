export default (config) => (req, res, next) => {
  const Keys = Object.keys(config);

  Keys.forEach((key) => {
    const items = config[key];
    const value = items.in.map((item) => {
      return req[item][key];
    });
    const validatedValue = value.filter((item) => item);
    if (items && items.required) {
      if (validatedValue.length !== value.length) {
        return next({
          error: 'BAD_REQUEST',
          message: items.errorMessage,
          status: 400,
        });
      }
    }
    if (items && items.string) {
      if (validatedValue[0]) {
        if (typeof validatedValue[0] !== 'string') {
          return next({
          error: 'BAD_REQUEST',
          message: `${key} must be a string`,
          status: 400,
          });
        }
      }
    }
    if (items && items.number) {
      if (validatedValue[0]) {
        if (isNaN(validatedValue[0])) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} must be a number`,
            status: 400,
          });
        }
      }
    }
    if (items && items.regex) {
      if (validatedValue[0]) {
        const rgex = RegExp(items.regex);
        if (!rgex.test(validatedValue[0])) {
          return next({
            error: 'BAD_REQUEST',
            message: `${key} is invalid`,
            status: 400,
          });
        }
      }
    }
    if (items && items.isObject) {
      if (validatedValue[0]) {
        if (typeof validatedValue[0] !== 'object') {
          return next({
            error: 'BAD_REQUEST',
            message: `invalid object`,
            status: 400,
          });
        }
      }
    }
    if (items && items.default) {
      if (validatedValue[0] === undefined) {
        validatedValue[0] = items.default;
      }
    }
    if (items && items.custom) {
      if (validatedValue[0]) {
        items.custom(validatedValue[0]);
      }
    }
    console.log(`${key}: ${validatedValue[0]}`);
  });
  next();
};
