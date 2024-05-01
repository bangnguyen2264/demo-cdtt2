import axios from "axios";

const API_URL = "http://api.example.com/users";

interface User {
  id: number;
  phone: string;
  name: string;
  gender: string;
  dob: Date;
}

export const UserService = {
  getUsers: async (): Promise<User[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  updateUser: async (id: number, user: User): Promise<User> => {
    const response = await axios.put(`${API_URL}/${id}`, user);
    return response.data;
  },

  deleteUser: async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  },
};
