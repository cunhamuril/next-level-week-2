import { Request, Response } from "express";

import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    const { week_day, subject, time } = req.query;

    if (!week_day || !subject || !time) {
      return res.status(400).json({
        error: "Missing filters to search classes",
      });
    }

    const timeInMinutes = convertHourToMinutes(time as string);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [
            Number(week_day as string),
          ])
          .whereRaw("`class_schedule`.`from` <= ??", [timeInMinutes])
          .whereRaw("`class_schedule`.`to` > ??", [timeInMinutes]);
      })
      .where("classes.subject", "=", subject as string)
      .join("users", "classes.user_id", "=", "users.id")
      .select("classes.*", "users.*");

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    const {
      user_id,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = req.body;

    const trx = await db.transaction();

    if (!user_id) {
      return res.status(400).json({ error: "user_id is required" });
    }

    try {
      const { id } = await trx("users")
        .select()
        .where("id", "=", user_id)
        .first();

      if (!id) {
        return res.status(400).json({ error: "User not found" });
      }

      await trx("users")
        .update({
          avatar,
          whatsapp,
          bio,
        })
        .where("id", "=", id);

      const insertedClassesIds = await trx("classes").insert({
        subject,
        cost,
        user_id: id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx("class_schedule").insert(classSchedule);

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      console.error(err);

      return res.status(400).json({
        error: "Unexpected error while creating new class",
      });
    }
  }
}
