const getUser = "getUser",
  headTrainer = "head-trainer",
  trainee = "trainee",
  trainer = "trainer";
const permissions = {
  getUsers: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};

function hasPermission(moduleName, role, permissionType) {
  if (
    permissions[moduleName] &&
    (permissions[moduleName]['all'].includes(role) ||
      permissions[moduleName][permissionType].includes(role))
  ) {
    console.log("true");
  } else console.log("false");
}
hasPermission("getUsers", "head-trainer", "delete");
