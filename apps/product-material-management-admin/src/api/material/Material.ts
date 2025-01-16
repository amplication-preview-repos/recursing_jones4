import { Production } from "../production/Production";

export type Material = {
  category: string | null;
  createdAt: Date;
  id: string;
  lotPrice: number;
  name: string;
  productions?: Array<Production>;
  status?: "Available" | "OutOfStock";
  stock: number;
  supplier: string | null;
  unitPrice: number;
  updatedAt: Date;
};
