export interface iPermission {
  [moduleName: string]: {
    all: Array<string>;
    read: Array<string>;
    write: Array<string>;
    delete: Array<string>;
  };
}
