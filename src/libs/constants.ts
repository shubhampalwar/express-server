import { iPermission } from "./interfaces";

const traineeModule: string = "trainee module",
  userModule: string= "user module",
  headTrainer: string = "head-trainer",
  trainee: string = "trainee",
  trainer: string = "trainer";

const permissions: iPermission = {
  [traineeModule]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  },
  [userModule]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
export { permissions, traineeModule,userModule, headTrainer, trainee, trainer };
