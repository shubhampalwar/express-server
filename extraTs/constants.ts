import { iPermission, iValidation } from "./interfaces";

const users: iValidation[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee1@successiv.tech",
    reviewerEmail: "reviewer1@successie.tech"
  },
  {
    traineeEmail: "trainee2@successive.tech",
    reviewerEmail: "reviewer2@successive.tech"
  }
];

const getUser: string = "getUsers",
  setUsers: string = "setUsers",
  getEmail: string = "getEmails",
  setEmail: string = "setEmail",
  traineePassword: string = "Trainee Password",
  trainingProcess: string = "Training Process",
  headTrainer: string = "head-trainer",
  trainee: string = "trainee",
  trainer: string = "trainer";

const permissions: iPermission = {
  [getUser]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  },
  [setUsers]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [headTrainer],
    delete: []
  },
  [getEmail]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer],
    delete: []
  },
  [setEmail]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainer, trainee],
    delete: []
  },
  [traineePassword]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [trainee],
    delete: []
  },
  [trainingProcess]: {
    all: [headTrainer],
    read: [trainee, trainer],
    write: [headTrainer],
    delete: []
  }
};
export {
  permissions,
  getUser,
  setUsers,
  getEmail,
  setEmail,
  traineePassword,
  trainingProcess,
  headTrainer,
  trainee,
  trainer,
  users
};
