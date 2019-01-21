import { validateEmail } from "./helper";

export default function validateUsers(userss) {
  let validUsers = [];
  let invalidUsers = [];
  userss.forEach(function(user) {
    const { traineeEmail, reviewerEmail } = user;
    if (validateEmail(reviewerEmail) && validateEmail(traineeEmail)) {
      validUsers.push(user);
    } else {
      invalidUsers.push(user);
    }
  });
  printUsers(validUsers, invalidUsers);
}

function printUsers(validUsers, invalidUsers) {
  console.log("valid users are: \n");
  validUsers.forEach(function(user) {
    const { traineeEmail, reviewerEmail } = user;
    console.log(traineeEmail);
    console.log(reviewerEmail);
    console.log("\n");
  });
  console.log("No.of valid users are: " + validUsers.length);
  console.log("\n");
  console.log("Invalid users are: \n");
  invalidUsers.forEach(function(user) {
    const { traineeEmail, reviewerEmail } = user;
    console.log(traineeEmail);
    console.log(reviewerEmail);
    console.log("\n");
  });
  console.log("No.of invalid users are: " + invalidUsers.length);
}
