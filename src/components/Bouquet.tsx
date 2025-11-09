interface BouquetProps {
  bouquet: Bouquet;
}

function Bouquet({ bouquet }: BouquetProps) {
  const handleLike = () => {
    console.log("Liking this bouquet...");
  };

  return (
    <div className="card h-100">
      <img
        src={bouquet.image}
        className="card-img-top"
        alt={bouquet.nom}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title d-flex justify-content-between">
          <span>{bouquet.nom}</span>
          <span className="text-success fw-bold">{bouquet.prix} DA</span>
        </h5>

        <p className="card-text small text-muted">{bouquet.descr}</p>

        <button
          onClick={handleLike}
          className="btn btn-outline-primary mt-auto"
        >
          {bouquet.isLiked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
}

export default Bouquet;
