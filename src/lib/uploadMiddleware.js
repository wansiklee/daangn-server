import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

export const uploadImage = multer({ storage }).single("image");

export const uploadController = (req, res) => {
  const {
    file: { path }
  } = req;

  return res.json({ path });
};
