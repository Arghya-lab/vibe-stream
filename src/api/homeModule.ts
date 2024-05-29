import axios from "axios";
import type { LanguageEnum } from "../@types/reqParamEnums";
import type { HomeModuleResponseType } from "../@types/res";

/* Homepage Data */
export const getHomeModules = async (params: { language?: LanguageEnum }) => {
  /*
  Github repo for backend api : https://github.com/rajput-hemant/jiosaavn-api-ts
*/

  const { data }: { data: HomeModuleResponseType } = await axios.get(
    "https://jiosaavn-api-rs.vercel.app/modules",
    { params }
  );
  return data;
};
