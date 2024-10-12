import { Button } from "@/components/ui/button";
import Link from "next/link";

const CataloguePage = () => {
    return ( 
        <Button asChild>
            <Link href="/catalogue/dedede">Go To</Link>
        </Button>
     );
}
 
export default CataloguePage;