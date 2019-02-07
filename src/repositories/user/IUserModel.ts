import { IVersionableModel } from '../versionable';
export default interface IUserModel extends IVersionableModel {
 id: string; email: string; name: string; password: string; role: string;
}
