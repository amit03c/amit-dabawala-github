// sd

import axios from "axios";
import { testimonial_Base_Url } from "../config/testimonials";

export const get_test_data = async (url: string, method: string) => {
  try {
    const res = await axios.request({
      baseURL: testimonial_Base_Url,
      url,
      method,
    });

    return res.data;
  } catch (err) {
    console.log(err);
  }
};
