const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
  /*'setUsers': {
    all: ['trainee'],
    read: ['head-trainer','trainer'],
    write: ['trainee'],
    delete: ['head-trainer'],
  }*/
};

function hasPermission(moduleName, role, permissionType) {
  if (
    permissions[moduleName] &&
    permissions[moduleName][permissionType].includes(role)
  ) {
    console.log("true");
  } else console.log("false");
}
hasPermission("getUsers", "head-trainer", "all");
