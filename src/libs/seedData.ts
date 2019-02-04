import UserRepository from '../repositories/user/UserRepository';
export default () => {
  const userRepository = new UserRepository();
  userRepository.countDocuments().then((res) => {
    if (res === 0) {
      userRepository
        .create({
          email: 'trainee@successive.tech',
          name: 'trainee',
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
          email: 'head_trainer@successive.tech',
          name: 'head trainer',
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
