import { randomUUID } from "node:crypto";
import { UserModel } from "../core/user.model";
import { UserRepository } from "../core/user.repository";

export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(user: Omit<UserModel, "id">): Promise<void> {
    const input = {
      id: randomUUID(),
      ...user,
    };
    await this.repository.create(input);
  }

  async findAll(): Promise<UserModel[]> {
    return this.repository.findAll();
  }

  async findById(id: string): Promise<UserModel> {
    const user = await this.repository.findById(id);
    if (!user) throw new Error("User not found");
    return user;
  }
}
