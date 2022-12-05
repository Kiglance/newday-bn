/* eslint-disable import/prefer-default-export */
import cloudinary from "../config/cloudinary";

export const fileUpload = async (req) => {
  let imageUrl = "";
  await cloudinary.uploader.upload(
    req.file.path,
    { folder: "newday_api/products" },
    async (err, image) => {
      if (err) {
        console.log(err, "********");
        throw new Error(err);
      }
      imageUrl = image.url;
    }
  );
  console.log(imageUrl, "******");
  return imageUrl;
};

export const imageUpload = async (req) => {
  let imageUrl = "";
  await cloudinary.uploader.upload(
    req.file.path,
    { folder: "newday_api/profile" },
    async (err, image) => {
      if (err) {
        console.log(err, "********");
        throw new Error(err);
      }
      imageUrl = image.url;
    }
  );
  return imageUrl;
};
