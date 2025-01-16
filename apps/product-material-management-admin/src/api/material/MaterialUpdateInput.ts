import { ProductionUpdateManyWithoutMaterialsInput } from "./ProductionUpdateManyWithoutMaterialsInput";

export type MaterialUpdateInput = {
  category?: string | null;
  lotPrice?: number;
  name?: string;
  productions?: ProductionUpdateManyWithoutMaterialsInput;
  status?: "Available" | "OutOfStock";
  stock?: number;
  supplier?: string | null;
  unitPrice?: number;
};
