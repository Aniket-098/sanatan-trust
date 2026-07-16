export const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No image uploaded.",
      });
    }

    res.status(200).json({
      success: true,

      imageUrl: req.file.path,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Image upload failed.",
    });
  }
};