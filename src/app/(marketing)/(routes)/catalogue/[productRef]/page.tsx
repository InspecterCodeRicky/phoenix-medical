import { products } from "@/data/products";
import { Metadata } from "next";
import DetailsProduct from "./details";




export async function generateMetadata({params} : any) : Promise<Metadata> {
  const product = products.find((el) => el.ref == params.productRef);

  return {
    title : product?.title,
    description : product?.shortDescription,
    // openGraph : {
    //   images : [
    //     `${(product?.images![0] || {}).url}`
    //   ]
    // }
  }
} 

const ProductPageID = ({params} : any) => {

  const productRef = params.productRef;

  const product = products.find((el) => el.ref == productRef);

  return (
    <div className="md:container mt-0 flex flex-col gap-5">
      <DetailsProduct product={product}/>  
    </div>
  );
}

export default ProductPageID
