export const meDetail = async (req, res) => {
  const { user } = req;
  res.json({ data: user.serialize() });
};
