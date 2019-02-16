const validation = {
  create: {
    name: {
      errorMessage: 'Name is required',
      in: ['body'],
      regex: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
      required: true,
      string: true,
    },
  },
  delete: {
    id: {
      errorMessage: 'Id is required',
      in: ['params'],
      required: true,
      string: true,
    },
  },
  get: {
    limit: {
      default: 10,
      errorMessage: 'Limit is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
    skip: {
      default: 20,
      errorMessage: 'Skip is invalid',
      in: ['query'],
      number: true,
      required: false,
    },
  },
  login: {
    email: {
      errorMessage: 'Email ID invalid',
      in: ['body'],
      required: true,
      string: true,
    },
    password: {
      errorMessage: 'Password is invalid',
      in: ['body'],
      required: true,
      string: true,
    },
  },
  update: {
    dataToUpdate: {
      errorMessage: 'Error in data to updates',
      in: ['body'],
      isObject: true,
      required: true,
      custom(dataToUpdate) {
        //
      },
    },
    id: {
      in: ['body'],
      required: true,
      string: true,
    },
  },
};
export default validation;
