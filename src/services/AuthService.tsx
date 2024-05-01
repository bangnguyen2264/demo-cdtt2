import axios from "axios";
import Cookies from "js-cookie";

interface AuthResponse {
  accessToken: string;
}

export const login = async (phone: string): Promise<boolean> => {
  try {
    const response = await axios.post<AuthResponse>(`${baseUrl}/login`, {
      phone: phone,
    });
    const accessToken = response.data.accessToken;
    Cookies.set("accessToken", accessToken); // Save token to Cookies
    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};

export const getToken = () => {
  Cookies.get("token");
};
export const logout = () => {
  Cookies.remove("token");
};
