import BouquetsList from "../components/BouquetList";

function Bouquets() {
  const mesBouquets: Bouquet[] = [
    {
      id: 1,
      nom: "Bouquet de Tunis",
      descr:
        "Un dosage parfait de jasmins et de tulipes, des couleurs éclatantes et du soleil toute l’année chez vous.",
      image: "/images/bouquetTunis.jpg",
      prix: 1500.0,
    },
    {
      id: 2,
      nom: "Bouquet d’Alger",
      descr:
        "Un mélange merveilleux de jasmins et de senteurs méditerranéennes, des odeurs éclatantes pour égayer votre bureau.",
      image: "/images/bouquetAlger.jpg",
      prix: 2000.0,
    },
    {
      id: 3,
      nom: "Bouquet d’Oran",
      descr:
        "Un mélange merveilleux de roses et de lys, des odeurs et des couleurs.",
      image: "/images/bouquetOran.jpg",
      prix: 2000.0,
    },
  ];

  return (
    <div>
      <h1>Trouvez votre bouquet de choix</h1>
      <p>Des bouquets pour toutes les occasions, ici chez Fleuriste Boujie</p>
      <BouquetsList bouquets={mesBouquets} />
    </div>
  );
}

export default Bouquets;
