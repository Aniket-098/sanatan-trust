import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getSettings = async (token) => {
  const res = await axios.get(
    `${API}/api/v1/admin/settings`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};


export const updateSettings = async (
  settings,
  token
) => {
  const res = await axios.put(
    `${API}/api/v1/admin/settings`,
    settings,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getPublicSettings = async () => {
  const res = await axios.get(
    `${API}/api/v1/settings`
  );

  return res.data;
};