export default config => (req, res, next) => {
  const Keys = Object.keys(config);

  Keys.forEach(key => {
    const items = config[key];
    const value = items.in.map(item => {
      return req[item][key];
    });
    const validatedValue = value.filter(item => item);
    if (items && items.required) {
      if (validatedValue.length !== value.length) {
        return next({
          error: "BAD_REQUEST",
          status: 400,
          message: items.errorMessage
        });
      }
    }
    if (items && items.string) {
      if (validatedValue[0]) {
        if (typeof validatedValue[0] != "string") {
          return next({
            error: "BAD_REQUEST",
            status: 400,
            message: `${key} must be a string`
          });
        }
      }
    }
    if (items && items.number) {
      if (validatedValue[0]) {
        if (isNaN(validatedValue[0])) {
          return next({
            error: "BAD_REQUEST",
            status: 400,
            message: `${key} must be a number`
          });
        }
      }
    }
    if (items && items.regex) {
      if (validatedValue[0]) {
        const rgex = RegExp(items.regex);
        if (!rgex.test(validatedValue[0])) {
          return next({
            error: "BAD_REQUEST",
            status: 400,
            message: `${key} is invalid`
          });
        }
      }
    }
    if (items && items.isObject) {
      if (validatedValue[0]) {
        if (typeof validatedValue[0] != "object") {
          return next({
            error: "BAD_REQUEST",
            status: 400,
            message: `invalid object`
          });
        }
      }
    }
    if (items && items.default) {
      if (validatedValue[0] == null) {
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
