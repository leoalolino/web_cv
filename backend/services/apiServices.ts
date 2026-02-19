import { prisma } from "../lib/prisma";
export interface Dtype {
  data?: any;
  model: string;
  id?: number;
  msg?: string;
  stats?: string;
}

// --------------------
// FIND
// --------------------

export const findById = async ({ model, id }: Dtype) => {
  try {
    const res = await (prisma as any)[model].findUnique({
      where: {
        id: id,
      },
    });

    return res
      ? { msg: "item exist", stats: "success" }
      : { msg: "item did not found", stats: "failed" };
  } catch (e) {
    return {
      error: `error due to: ${e}`,
      status: "failed",
    };
  }
};

// -------------------
// FIND BY DATA
// -------------------

export const findData = async ({ model, data }: Dtype) => {
  try {
    const exist = await (prisma as any)[model].findFirst({
      where: data,
    });

    if (exist) {
      return {
        msg: "data does exist",
        stats: "success",
      };
    }

    return {
      msg: "couldn't find data",
      stats: "failed",
    };
  } catch (e) {
    return {
      error: `error due to: ${e}`,
    };
  }
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

export const createService = async ({ model, data }: Dtype) => {
  const res = await findData({ model, data });

  if (res.stats === "success") {
    return {
      msg: "item already exists, cannot create duplicate",
      stats: "failed",
    };
  }

  try {
    const result = await (prisma as any)[model].create({
      data: data,
    });
    return {
      msg: "successfully created item",
      stats: "success",
      data: result,
      quantity: 1,
    };
  } catch (e: any) {
    console.error("CREATE ERROR:", e.message);
    return {
      msg: `failed to create: ${e.message}`,
      stats: "failed",
      data: null,
      quantity: 0,
    };
  }
};

// --------------------
// UPDATE
// --------------------

export const updateService = async ({ model, data, id }: Dtype) => {
  const res = await findData({ model, id });

  if (res.stats !== "success") {
    return {
      msg: "failed to update data doesn't not exist ",
      stats: "failed",
    };
  }

  try {
    const result = await (prisma as any)[model].updateMany({
      where: {
        id: id,
      },
      data: data,
    });

    return result.count > 0
      ? { msg: "successfully updated", stats: "success" }
      : { msg: "failed to update", stats: "failed" };
  } catch (e) {
    return {
      error: `error due to: ${e}`,
      stats: "failed",
    };
  }
};

// --------------------
// DELETE
// --------------------

export const deleteService = async ({ model, id }: Dtype) => {
  const res = await findById({ model, id });
  if (res.stats !== "success") {
    return {
      msg: res.msg,
      stats: res.stats,
    };
  }

  try {
    const result = await (prisma as any)[model].delete({
      where: { id: id },
    });

    return {
      msg: "successfully deleted",
      stats: "success",
      data: result,
    };
  } catch (e: any) {
    return {
      msg: `error due to: ${e.message}`,
      stats: "failed",
    };
  }
};
