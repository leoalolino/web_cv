import express from "express";
import { Request, Response } from "express";
import {
  getMethod,
  postMethod,
  deleteMethod,
  updateMethod,
} from "../controllers/apiController";
export const api = express.Router();

api.route("/item/:id/:table", (req: Request, res: Response) => {
  const method = req.method;
  const { id, table } = req.params;
  const data = req.body;

  switch (method) {
    case "GET":
      getMethod(table);
      break;
    case "POST":
      postMethod(table, data);
      break;
    case "PUT":
      updateMethod(table, data, id);
      break;
    case "DELETE":
      deleteMethod(table, id);
      break;
    default:
      return res.status(401).json({ error: "invalid method" });
  }
});
