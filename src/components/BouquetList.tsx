import Bouquet from "../components/Bouquet";

interface BouquetListProps {
  bouquets: Bouquet[];
}

function BouquetList({ bouquets }: BouquetListProps) {
  return (
    <div className="row g-4">
      {bouquets.map((bouquet) => (
        <div key={bouquet.id} className="col-12 col-sm-6 col-lg-4">
          <Bouquet bouquet={bouquet} />
        </div>
      ))}
    </div>
  );
}

export default BouquetList;
