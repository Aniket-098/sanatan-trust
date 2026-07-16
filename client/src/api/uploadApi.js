import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const uploadImage = async (file, token) => {
  const formData = new FormData();

  formData.append("image", file);

  const { data } = await axios.post(
    `${API}/api/v1/admin/upload`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data;
};