import IVersionableModel from '../versionable/IVersionableModel';
export default interface IUser extends IVersionableModel {
 id: string; email: string; name: string; password: string; role: string;
}
