const getUsers = "getUsers",
  headTrainer = "head-trainer",
  trainee = "trainee",
  trainer = "trainer";
const permissions = {
  [getUsers]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
export { permissions, getUsers, headTrainer, trainee, trainer };
