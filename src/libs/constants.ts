import { iPermission } from "./interfaces";

const traineee: string = "traineee",
  headTrainer: string = "head-trainer",
  trainee: string = "trainee",
  trainer: string = "trainer";

const permissions: iPermission = {
  [traineee]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  }
};
export { permissions, traineee, headTrainer, trainee, trainer };
