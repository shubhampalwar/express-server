import { hashPassword } from '../libs';
import { UserRepository } from '../repositories';
export default async () => {
  const userRepository = new UserRepository();
  const res = await userRepository.countDocuments();
  if (res === 0) {
    try {
      let result = await userRepository
      .create({
        email: 'trainee@successive.tech',
        name: 'trainee',
        password: await hashPassword(),
        role: 'trainee',
      });
      if (result) {
        console.log('User Created', result);
      }
      result = await userRepository
      .create({
        email: 'head_trainer@successive.tech',
        name: 'head trainer',
        password: await hashPassword(),
        role: 'head-trainer',
      });
      if (result) {
        console.log('User Created', result);
      }
   } catch (err) {
     console.log('error', err);
   }
  }
};
