import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

import db from "../database/connection";

export const jwtKey = "proffy-nlw2";

export default class ClassesController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await db("users")
        .select("*")
        .where("email", "=", email)
        .first();

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      const authConfirmed = await bcrypt.compare(password, user.password);

      if (!authConfirmed) {
        return res.status(401).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ id: user.id }, jwtKey, { expiresIn: "7d" });

      return res.json({
        token,
        user,
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error: "Unexpected error while creating a user",
      });
    }
  }
}
