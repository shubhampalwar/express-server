export interface IPermission {
  [moduleName: string]: {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
  };
}

export interface IValidation {
  traineeEmail: string;
  reviewerEmail: string;
}
