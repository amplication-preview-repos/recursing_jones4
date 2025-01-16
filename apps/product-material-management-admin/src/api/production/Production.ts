import { Material } from "../material/Material";
import { Product } from "../product/Product";

export type Production = {
  createdAt: Date;
  id: string;
  material?: Array<Material>;
  product?: Array<Product>;
  quantity: number | null;
  updatedAt: Date;
};
