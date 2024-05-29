import axios from "axios";

const ApiInstance = axios.create({
  // baseURL: "https://jiosaavn-api-rs.vercel.app",
  baseURL: "https://saavn.dev/api",
});

export default ApiInstance;

export * from "./homeModule";
export * from "./search";
export * from "./song";
export * from "./album";
export * from "./artist";
export * from "./playlist";
