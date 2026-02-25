import express from "express";
import { textControl, fileControl } from "../controllers/fileController";
export const file = express.Router();

file.post("/:table/textField", textControl);
file.post("/:table/fileField", fileControl);
