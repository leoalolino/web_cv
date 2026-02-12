import express from "express";
import {
  getMethod,
  postMethod,
  deleteMethod,
  updateMethod,
} from "../controllers/apiController";
export const api = express.Router();

api.route("/items/:table").get(getMethod).post(postMethod);

api.route("/items/:table/:id").put(updateMethod).delete(deleteMethod);
