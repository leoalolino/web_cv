import { Request, Response, NextFunction } from "express";
import * as api from "../services/apiServices";

interface types {
  model?: string;
  id?: string;
  data?: string;
  new_data?: string;
}

// ===============
// GET
// ===============

const respHandler = (res: Response, data: any) => {
  const statusCode = data.stats === "success" ? 200 : 400;

  return res.status(statusCode).json({
    message: data.msg as string,
    status: data.stats as string,
  });
};

export const getMethod = async (req: Request, res: Response) => {
  const { model } = req.params;

  const resp = await api.displayService({ model: model as string } as any);

  return respHandler(res, resp);
};

// ===============
// POST
// ===============

export const postMethod = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { model }: types = req.params;
  const { data }: types = req.body;
};

// ===============
// UPDATE
// ===============

export const updateMethod = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { model, id }: types = req.params;
  const { new_data }: types = req.body;
};

// ===============
// DELETE
// ===============

export const deleteMethod = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { model, id }: types = req.params;
};

//check data using id or table if this data exist
//if data exist do the thing either executes the methods
