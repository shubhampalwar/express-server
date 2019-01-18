console.log("Inside Extra index");
import { diamondPattern, trianglePattern } from "./Patterns";
import { hasPermission } from "./utils";
import { validateUsers } from "./utils";

const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successiv.tech",
    reviewerEmail: "reviewer1@successie.tech"
  },
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  }
];

diamondPattern(5);
trianglePattern(5);
diamondPattern(10);
trianglePattern(10);
hasPermission("getUsers", "head-trainer", "delete");
hasPermission("getUser", "head-trainer", "read");
validateUsers(users);
console.log("outside Extra Index");
