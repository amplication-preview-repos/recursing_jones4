import { MaterialUpdateManyWithoutProductionsInput } from "./MaterialUpdateManyWithoutProductionsInput";
import { ProductUpdateManyWithoutProductionsInput } from "./ProductUpdateManyWithoutProductionsInput";

export type ProductionUpdateInput = {
  material?: MaterialUpdateManyWithoutProductionsInput;
  product?: ProductUpdateManyWithoutProductionsInput;
  quantity?: number | null;
};
