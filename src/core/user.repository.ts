import { UserModel } from "./user.model";

export interface UserRepository {
  create: (user: UserModel) => Promise<void>;
  findAll: () => Promise<UserModel[]>;
  findById: (id: string) => Promise<UserModel | undefined>;
}
