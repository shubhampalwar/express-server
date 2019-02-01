import UserRepository from '../repositories/user/UserRepository';
export default () => {
  const user = new UserRepository();
  user
    .create({ name: 'Super Admin' })
    .then((result) => {
      console.log('User Created', result);
    })
    .catch((err) => {
      console.log('Error', err);
    });
  user
    .deleteOne({})
    .then((result) => {
      console.log('Delete', result);
    })
    .catch((err) => {
      console.log('Error', err);
    });
  user
    .updateOne({ name: 'Super Admin' }, { name: 'Admin' })
    .then((result) => {
      console.log('Updates are', result);
    })
    .catch((err) => {
      console.log('Error', err);
    });
};
