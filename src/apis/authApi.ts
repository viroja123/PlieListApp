import API from "./api";

export const loginApi = async (data: any) => {
  const response = await API.post('/login', data);
  return response.data;
};