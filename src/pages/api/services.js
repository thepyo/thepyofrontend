import { globalConfig } from "@/theme/config";
import axios from "axios";

export default async function handler(req, res) {

  try {
      const request = await axios.get(`${globalConfig.api_url}/services?populate=*`)
      res.status(200).json(request?.data?.data);
  } catch (error) {
    res.status(400).json("lỗi rồi");
  }

}
