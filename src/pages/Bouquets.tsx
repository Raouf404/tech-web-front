import { useEffect, useState } from "react";
import BouquetsList from "../components/BouquetList";
import { addSeenState } from "../services/bouquets";

function Bouquets() {
  const [mesBouquets, setMesBouquets] = useState<Bouquet[]>([]);

  useEffect(() => {
    addSeenState().then(setMesBouquets);
  }, []);

  return (
    <div>
      <h1>Trouvez votre bouquet de choix</h1>
      <p>Des bouquets pour toutes les occasions, ici chez Fleuriste Boujie</p>
      {mesBouquets && <BouquetsList bouquets={mesBouquets} />}
    </div>
  );
}

export default Bouquets;
