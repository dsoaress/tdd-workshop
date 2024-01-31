import * as express from "express";
import { InMemoryUserRepository } from "./tests/in-memory-user.repository";
import { UserService } from "./app/user.service";
import { UserController } from "./infra/user.controller";

const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

app.get("/users", (req, res) => userController.findAll(req, res));
app.get("/users/:id", (req, res) => userController.findById(req, res));
app.post("/users", (req, res) => userController.create(req, res));

app.listen(3333, () => console.log("Server running on port 3333"));
