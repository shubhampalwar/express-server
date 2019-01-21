import {
  permissions,
  getUser,
  setUsers,
  getEmail,
  setEmail,
  traineePassword,
  trainingProcess,
  headTrainer,
  trainee
} from "../constants";
export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string
): void {
  console.log(
    `${role} has permission for ${permissionType} in ${moduleName} ?\n`
  );
  const all: string = "all";
  if (
    permissions[moduleName] &&
    (permissions[moduleName][all].includes(role) ||
      permissions[moduleName][permissionType].includes(role))
  ) {
    console.log("true \n");
  } else console.log("false \n");
}
