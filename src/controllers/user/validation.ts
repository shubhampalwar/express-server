const validation = {
  create: {
    id: {
      required: true,
      number: true,
      in: ["body"],
      errorMessage: "ID is required",
      custom: function(value) {
        console.log("Value", value);
       // throw { error: "Error Occurred", message: "Message" };
      }
    },
    name: {
      string: true,
      required: true,
      regex: "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$",
      in: ["body"],
      errorMessage: "Name is required"
    }
  },
  delete: {
    id: {
      required: true,
      number: true,
      errorMessage: "Id is required",
      in: ["params"]
    }
  },
  get: {
    skip: {
      required: false,
      default: 20,
      number: true,
      in: ["query"],
      errorMessage: "Skip is invalid"
    },
    limit: {
      required: false,
      default: 10,
      number: true,
      in: ["query"],
      errorMessage: "Limit is invalid"
    }
  },
  update: {
    id: {
      required: true,
      string: true,
      in: ["body"]
    },
    dataToUpdate: {
      in: ["body"],
      required: true,
      isObject: true,
      errorMessage: "Error in data to updates",
      custom: function(dataToUpdate) {}
    }
  }
};
export default validation;
