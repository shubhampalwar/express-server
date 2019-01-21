export interface iPermission {
  [moduleName: string]: {
    all: Array<string>;
    read: Array<string>;
    write: Array<string>;
    delete: Array<string>;
  };
}

export interface iValidation {
  traineeEmail: string;
  reviewerEmail: string;
}
