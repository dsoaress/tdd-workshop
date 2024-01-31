import { Request, Response } from "express";
import { UserService } from "../app/user.service";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async create(req: Request, res: Response): Promise<void> {
    const { name, age } = req.body;
    await this.userService.create({ name, age });
    res.status(201).json({ message: "User created" });
  }

  async findAll(_req: Request, res: Response): Promise<void> {
    const users = await this.userService.findAll();
    res.json(users);
  }

  async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const user = await this.userService.findById(id);
    res.json(user);
  }
}
