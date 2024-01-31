import { UserModel } from "../core/user.model";
import { UserRepository } from "../core/user.repository";

export class InMemoryUserRepository implements UserRepository {
  private readonly _users: UserModel[] = [];

  async create(user: UserModel): Promise<void> {
    this._users.push(user);
  }

  async findAll(): Promise<UserModel[]> {
    return this._users;
  }

  async findById(id: string): Promise<UserModel | undefined> {
    return this._users.find((user) => user.id === id);
  }
}
