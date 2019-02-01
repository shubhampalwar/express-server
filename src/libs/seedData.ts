import UserRepository from '../repositories/user/UserRepository';
export default () => {
  const userRepository = new UserRepository();
  userRepository.countDocuments().then((res) => {
    if (res === 0) {
      userRepository
        .create({
          name: 'trainee',
          email: 'trainee@successive.tech',
          role: 'trainee',
        })
        .then((result) => {
          console.log('User Created', result);
        })
        .catch((err) => {
          console.log('Error', err);
        });
      userRepository
        .create({
          name: 'head trainer',
          email: 'head_trainer@successive.tech',
          role: 'head-trainer',
        })
        .then((result) => {
          console.log('User Created', result);
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  });
  // userRepository
  //   .deleteOne({})
  //   .then((result) => {
  //     console.log('Delete', result);
  //   })
  //   .catch((err) => {
  //     console.log('Error', err);
  //   });
  // userRepository
  //   .updateOne({ name: 'Super Admin' }, { name: 'Admin' })
  //   .then((result) => {
  //     console.log('Updates are', result);
  //   })
  //   .catch((err) => {
  //     console.log('Error', err);
  //   });
};
