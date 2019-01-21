import { diamondPattern, trianglePattern } from "./Patterns";
import { hasPermission, validateUsers } from "./utils";
import {
  getUsers,
  setUsers,
  getEmail,
  setEmail,
  traineePassword,
  trainingProcess,
  headTrainer,
  trainee,
  trainer,
  users
} from "./constants";

diamondPattern(5);
trianglePattern(5);
diamondPattern(10);
trianglePattern(10);
hasPermission(getUsers, headTrainer, "delete");
hasPermission("getUser", "head-trainer", "read");
hasPermission(trainingProcess, trainer, "write");
hasPermission("Trainee Password", "trainee", "write");
validateUsers(users);
