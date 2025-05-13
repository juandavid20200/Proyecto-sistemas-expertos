import axios, { AxiosError } from "axios";
import { environment } from "../../environment/local";
import { PostInfo } from "../../interfaces/PostInfo";

type PostInfoRequest = PostInfo & {
  sintomas: string[];
};

const PostInfoService = async (formData: PostInfoRequest) => {
  const headers = {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyQGV4YW1wbGUuY29tIiwiZXhwIjoxNzQ0MzM0MjM2fQ.DVk3KvT405u_es3DEKiJKZeBDSsI3WMOA9aGWv1JuBQ`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      `${environment.app_url}/consultas`,
      formData,
      { headers } // aquí los pasas correctamente
    );
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error("❌ Error en la API:", error.response?.data || error.message);
    } else {
      console.error("❌ Error desconocido:", error);
    }
    throw error;
  }
};

export default PostInfoService;
