import Bouquet from "../components/Bouquet";

interface BouquetListProps {
  bouquets: Bouquet[];
}

function BouquetList({ bouquets }: BouquetListProps) {
  return (
    <div>
      {bouquets.map((bouquet) => (
        <Bouquet key={bouquet.id} bouquet={bouquet} />
      ))}
    </div>
  );
}

export default BouquetList;
