import { ProductionUpdateManyWithoutProductsInput } from "./ProductionUpdateManyWithoutProductsInput";
import { Decimal } from "decimal.js";

export type ProductUpdateInput = {
  costPrice?: number;
  description?: string;
  productName?: string;
  productions?: ProductionUpdateManyWithoutProductsInput;
  profit?: Decimal;
  salesPrice?: number;
  status?: "Active" | "Inactive" | null;
  stock?: number;
};
