import axios from "axios";

export async function getAllProducts({ page = 1, limit = 10 }) {
  return new Promise((res, rej) => {
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products?_page=${page}&_limit=${limit}`
        );
        res(response.data);
      } catch (error) {
        rej(error);
      }
    }, 500);
  });
}
