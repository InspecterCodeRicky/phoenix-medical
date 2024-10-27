import DetailsProduct from "./details";
import { Id } from "@/convex/_generated/dataModel";



const CataloguePageID = ({ params }: any) => {
  const catalogueId = params.catalogueId as Id<"catalogue">;
  return (
    <div className="md:container mt-0 flex flex-col gap-5">
      <DetailsProduct catalogueId={catalogueId} />
    </div>
  );
};

export default CataloguePageID;
