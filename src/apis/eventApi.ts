import API from "./api";

export const eventApi = async () => {
  const response = await API.post('/events-listing');
  return response.data.data;
};