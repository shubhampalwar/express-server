import { iValidation } from "./interfaces";
console.log("Inside Extra index");
import { diamondPattern, trianglePattern } from "./Patterns";
import { hasPermission } from "./utils";
import { validateUsers } from "./utils";
import { users } from "./constants";

diamondPattern(5);
trianglePattern(5);
diamondPattern(10);
trianglePattern(10);
hasPermission("getUsers", "head-trainer", "delete");
hasPermission("getUser", "head-trainer", "read");
hasPermission("Trainee Password", "trainee", "write");
validateUsers(users);
console.log("outside Extra Index");
