import multer from "multer";

const multerImage = multer({ dest: "uploads/" });

export const uploadImage = multerImage.array("image", 5);

export const uploadController = (req, res) => {
  const { files } = req;
  return res.json({ files });
};
