/***********************
  GET /api/users/:id
************************/
export const userDetail = async (req, res) => {
  const { data } = req;
  res.json({ data: data.serialize() });
};
