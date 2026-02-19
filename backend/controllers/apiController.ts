import { Request, Response, NextFunction } from "express";
import * as api from "../services/apiServices";

interface types {
  table?: any;
  id?: string;
  data?: string;
  msg?: string;
  stats?: string;
}

// ===============
// CAPITALIZED
// ===============

const Case = ({ table }: types) => {
  const model = table.charAt(0).toUpperCase() + table.slice(1);
  return model;
};

// ===============
// GET
// ===============

const respHandler = (res: Response, data: any) => {
  const statusCode = data.stats === "success" ? 200 : 400;

  return res.status(statusCode).json({
    message: data.msg,
    status: data.stats,
    data: data.data ?? [],
  } as types);
};

export const getMethod = async (req: Request, res: Response) => {
  const { table } = req.params;
  const model = Case({ table });

  const resp = await api.displayService({ model } as any);
  return respHandler(res, resp);
};

// ===============
// POST
// ===============

export const postMethod = async (req: Request, res: Response) => {
  const { table }: types = req.params;
  const data = req.body;
  const model = Case({ table });

  const resp = await api.createService({ model, data } as any);
  return respHandler(res, resp);
};

// ===============
// UPDATE
// ===============

export const updateMethod = async (req: Request, res: Response) => {
  const { table, id }: types = req.params;
  const data = req.body;
  const model = Case({ table });

  const resp = await api.updateService({
    model,
    data,
    id: parseInt(id!),
  });
  return respHandler(res, resp);
};

// ===============
// DELETE
// ===============

export const deleteMethod = async (req: Request, res: Response) => {
  const { table, id }: types = req.params;
  const model = Case({ table });
  const resp = await api.deleteService({ model, id: parseInt(id!) });
  return respHandler(res, resp);
};
