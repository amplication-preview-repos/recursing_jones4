import { ProductionCreateNestedManyWithoutMaterialsInput } from "./ProductionCreateNestedManyWithoutMaterialsInput";

export type MaterialCreateInput = {
  category?: string | null;
  lotPrice: number;
  name: string;
  productions?: ProductionCreateNestedManyWithoutMaterialsInput;
  status: "Available" | "OutOfStock";
  stock: number;
  supplier?: string | null;
  unitPrice: number;
};
