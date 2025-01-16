import { Production } from "../production/Production";
import { Decimal } from "decimal.js";

export type Product = {
  costPrice: number;
  createdAt: Date;
  description: string;
  id: string;
  productName: string;
  productions?: Array<Production>;
  profit: Decimal;
  salesPrice: number;
  status?: "Active" | "Inactive" | null;
  stock: number;
  updatedAt: Date;
};
