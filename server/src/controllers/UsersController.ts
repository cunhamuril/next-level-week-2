import bcrypt from "bcrypt";
import { Request, Response } from "express";

import db from "../database/connection";

const saltRounds = 10;

export default class ClassesController {
  async show(req: Request, res: Response) {
    const { user_id } = req.query;

    if (!user_id) {
      return res.status(400).json({ error: "user_id is required" });
    }

    try {
      const user = await db("users").select().where("id", "=", user_id).first();

      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      const { id, name, last_name, email, avatar, whatsapp, bio } = user;

      return res.json({ id, name, last_name, email, avatar, whatsapp, bio });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error: "Unexpected error while listing a user",
      });
    }
  }

  async create(req: Request, res: Response) {
    const { name, last_name, email, password, confirm_password } = req.body;

    if (!confirm_password || password !== confirm_password) {
      return res.status(401).json({ error: "Passwords are not the same" });
    }

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    try {
      await db("users").insert({
        name,
        last_name,
        email,
        password: encryptedPassword,
      });

      res.status(201).send();
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error: "Unexpected error while creating a user",
      });
    }
  }
}
