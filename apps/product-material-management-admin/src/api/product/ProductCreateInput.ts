import { ProductionCreateNestedManyWithoutProductsInput } from "./ProductionCreateNestedManyWithoutProductsInput";
import { Decimal } from "decimal.js";

export type ProductCreateInput = {
  costPrice: number;
  description: string;
  productName: string;
  productions?: ProductionCreateNestedManyWithoutProductsInput;
  profit: Decimal;
  salesPrice: number;
  status?: "Active" | "Inactive" | null;
  stock: number;
};
