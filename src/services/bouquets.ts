import { getBouquets } from "../api/bouquets";

export async function addSeenState() {
  const bouquets = await getBouquets();
  return bouquets.map((b) => ({ ...b, isSeen: false }));
}
