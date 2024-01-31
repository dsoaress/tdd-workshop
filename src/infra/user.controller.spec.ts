import { Request, Response } from "express";
import { UserController } from "./user.controller";
import { UserService } from "../app/user.service";

describe("UserController", () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(() => {
    service = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
    } as unknown as UserService;
    controller = new UserController(service);
  });

  it("should create a user", async () => {
    const req = {
      body: {
        name: "John Doe",
        age: 30,
      },
    } as unknown as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;
    await controller.create(req, res);
    expect(service.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: "User created" });
  });

  it("should list all users", async () => {
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;
    await controller.findAll(req, res);
    expect(service.findAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();
  });

  it("should find a user by id", async () => {
    const req = {
      params: {
        id: "user-id",
      },
    } as unknown as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;
    await controller.findById(req, res);
    expect(service.findById).toHaveBeenCalledWith(req.params.id);
    expect(res.json).toHaveBeenCalled();
  });
});
