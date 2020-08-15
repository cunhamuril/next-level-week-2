import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { jwtKey } from "../controllers/AuthController";

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error("No token provided");
    }

    const token = authorization.split(" ")[1];

    jwt.verify(token, jwtKey, (err) => {
      if (err)
        return res.status(401).json({
          success: false,
          message: "Invalid token",
        });

      return next();
    });
  } catch (error) {
    console.error(error.message);

    return res.status(error.message === "No token provided" ? 401 : 500).json({
      success: false,
      message: error.message,
    });
  }
};
