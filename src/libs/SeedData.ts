import UserRepository from "../repositories/user/UserRepository";
export default () => {
  const user = new UserRepository();
  user.create({ name: "Admin22" }).then((result) => {
    console.log("User Created");
  }).catch((err) => {
    console.log("Error", err);
  });;
};
