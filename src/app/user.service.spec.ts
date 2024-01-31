import { InMemoryUserRepository } from "../tests/in-memory-user.repository";
import { UserRepository } from "../core/user.repository";
import { UserService } from "./user.service";

describe("UserService", () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(() => {
    repository = new InMemoryUserRepository();
    service = new UserService(repository);
  });

  it("should create a user", async () => {
    const user = {
      name: "Pedro",
      age: 28,
    };
    await service.create(user);
    const users = await repository.findAll();
    expect(users).toHaveLength(1);
    expect(users[0].id).toBeDefined();
    expect(users[0].name).toBe("Pedro");
    expect(users[0].age).toBe(28);
  });

  it("should list all users", async () => {
    const user = {
      name: "Pedro",
      age: 28,
    };
    await service.create(user);
    const users = await service.findAll();
    expect(users).toHaveLength(1);
  });

  it("should find a user by id", async () => {
    const user = {
      name: "Pedro",
      age: 28,
    };
    await service.create(user);
    const users = await service.findAll();
    const userId = users[0].id;
    const foundUser = await service.findById(userId);
    expect(foundUser).toBeDefined();
  });

  it("should throw an error when user is not found", async () => {
    await expect(service.findById("id")).rejects.toThrow();
  });
});
