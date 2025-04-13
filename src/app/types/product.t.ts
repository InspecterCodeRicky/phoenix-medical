interface ProductType {
  ref: string;
  images?: ImageType[];
  title: string;
  shortDescription?: string;
  description?: string;
  carateristics?: string;
  price: number;
  ugc: number;
  tags: string[];
  status: "pending" | "published";
}

interface ImageType {
  url: string;
}

