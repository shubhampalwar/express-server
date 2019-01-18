import {
  permissions,
  getUsers,
  headTrainer,
  trainee,
  trainer
} from "../constants";
export default function hasPermission(moduleName, role, permissionType) {
  console.log("\nhas permission ?\n");
  if (
    permissions[moduleName] &&
    (permissions[moduleName]["all"].includes(role) ||
      permissions[moduleName][permissionType].includes(role))
  ) {
    console.log("true \n");
  } else console.log("false \n");
}
