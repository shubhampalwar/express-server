import * as bcrypt from 'bcrypt';
export default async () => {
  const pswrd = await bcrypt.hash(process.env.PASSWORD, 10);
  return pswrd;
};
