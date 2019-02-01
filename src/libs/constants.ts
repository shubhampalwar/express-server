import { IPermission } from './interfaces';

const traineeModule: string = 'trainee module';
const  userModule: string = 'user module';
const  headTrainer: string = 'head-trainer';
const  trainee: string = 'trainee';
const  trainer: string = 'trainer';

const permissions: IPermission = {
  [traineeModule]: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
  [userModule]: {
    all: [headTrainer],
    delete: [],
    read: [trainee, trainer],
    write: [trainer],
  },
};
export { permissions, traineeModule, userModule, headTrainer, trainee, trainer };
