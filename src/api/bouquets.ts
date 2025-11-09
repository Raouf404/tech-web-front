import { config } from "../config/config";
import { myFetch } from "./myFetch";

export async function getBouquets(): Promise<Bouquet[]> {
  try {
    const data = await myFetch(`${config.LOCAL_URL}/api/bouquets`);
    return data as Bouquet[];
  } catch (e) {
    console.error("Error fetching bouquets:", e);
    return [];
  }
}
