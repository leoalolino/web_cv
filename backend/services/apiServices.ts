import prisma from "../db";

export interface Dtype {
  info?: any;
  model: string;
  id?: number;
  msg: string;
  stats: string;
}
// export const tableService = async ({ model }: Dtype) => {
//   const res = await (prisma as any)[model].findMany();
//
//   return res.count > 0
//     ? { msg: "table exist", stats: "success" }
//     : { msg: "table does not exist", stats: "failed" };
// };

// --------------------
// FIND
// --------------------

export const findById = async ({ model, id }: Dtype) => {
  const res = await (prisma as any)[model].findMany({
    where: {
      id: id,
    },
  });

  return res.count > 0
    ? { msg: "item exist", stats: "success" }
    : { msg: "item did not found", stats: "failed" };
};

// -------------------
// DISPLAY
// -------------------

export const displayService = async ({ model }: Dtype) => {
  try {
    const result = await (prisma as any)[model].findMany();

    return result.length > 0
      ? {
          msg: "successfully fetch everything",
          stats: "success",
          data: result,
          quantity: result.length,
        }
      : {
          msg: "table empty failed to fetch",
          stats: "failed",
          data: [],
          quantity: null,
        };
  } catch (e) {
    return { msg: "failed to fetch data", stats: "failed" };
  }
};

// --------------------
// UPDATE
// --------------------

export const updateService = async ({ model, info, id }: Dtype) => {
  const result = await (prisma as any)[model].updateMany({
    where: {
      id: id,
    },
    data: info,
  });

  return result.count > 0
    ? { msg: "successfully updated", stats: "success" }
    : { msg: "failed to update", stats: "failed" };
};

// --------------------
// DELETE
// --------------------

export const deleteService = async ({ model, id }: Dtype) => {
  const res = await (prisma as any)[model].deleteMany({
    where: {
      id: id,
    },
  });

  return res.count > 0
    ? { msg: "successfully deleted", stats: "failed" }
    : { msg: "failed  to delete", stats: "failed" };
};
