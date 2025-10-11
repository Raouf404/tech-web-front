interface BouquetProps {
  bouquet: Bouquet;
}

function Bouquet({ bouquet }: BouquetProps) {
  return (
    <div className="card">
      <div>
        <h2>{bouquet.nom}</h2>
        <span>{bouquet.prix}</span>
      </div>
      <img src={bouquet.image} alt={bouquet.nom} />
      <p>{bouquet.descr}</p>
    </div>
  );
}

export default Bouquet;
