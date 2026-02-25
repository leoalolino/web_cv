export const fileControl = async (req: any, res: any) => {
  const { table } = req.params;
  const { fileName } = req.body;
  console.log(fileName);
  console.log(table);
  if (table) return res.status(200).json({ stats: "success" });

  return res.status(400).json({ stats: "failed" });
};

export const textControl = async (req: any, res: any) => {
  const { table } = req.params;
  const { textName } = req.body;

  console.log(textName);
  console.log(table);
  if (table) return res.status(200).json({ stats: "success" });

  return res.status(400).json({ stats: "failed" });
};
