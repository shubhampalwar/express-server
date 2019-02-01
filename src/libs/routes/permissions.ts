import {
  headTrainer,
  permissions,
  trainee,
  traineeModule,
  trainer,
  userModule,
} from '../constants';
export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string,
): boolean {
  const all: string = 'all';
  if (
    permissions[moduleName] &&
    (permissions[moduleName][all].includes(role) ||
      permissions[moduleName][permissionType].includes(role))
  ) {
    return true;
  } else { return false; }
}
