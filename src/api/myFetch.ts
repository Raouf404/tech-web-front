import axios from "axios";
import { config } from "../config/config";

export async function myFetch(url: string, options: any = {}) {
  if (config.useAxios) {
    const res = await axios({
      url,
      method: options.method || "GET",
      data: options.body || null,
      headers: options.headers || {},
    });
    return res.data;
  } else {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  }
}
