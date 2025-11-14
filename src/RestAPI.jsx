// RestAPI.jsx
import axios from "axios";

export async function getProfileData() {
  try {
    const response = await axios.get("http://localhost:3000/Profile");
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return null;
  }
}
