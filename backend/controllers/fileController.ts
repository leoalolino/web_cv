interface file {
  file: String;
}
export const fileControl = async (req: any, res: any) => {
  try {
    const { fileName } = req.body;
    const { table } = req.params;
    console.log(`found: ${fileName}`);
    console.log(`with the table of ${table}`);

    if (fileName && table)
      return res.status(200).json({ file: fileName, table: table });

    return res.status(400).json({ message: "failed" });
  } catch (e: any) {
    return { message: `error due to: ${e.message}`, status: "failed" };
  }
};
