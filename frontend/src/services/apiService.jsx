import axios from "axios";

const BASE_URL = "http://localhost:5000/contacts";

export const fetchContacts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addContact = async (contact) => {
  await axios.post(BASE_URL, contact);
};

export const deleteContact = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
