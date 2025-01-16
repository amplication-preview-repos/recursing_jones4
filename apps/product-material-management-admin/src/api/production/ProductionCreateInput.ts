import { MaterialCreateNestedManyWithoutProductionsInput } from "./MaterialCreateNestedManyWithoutProductionsInput";
import { ProductCreateNestedManyWithoutProductionsInput } from "./ProductCreateNestedManyWithoutProductionsInput";

export type ProductionCreateInput = {
  material?: MaterialCreateNestedManyWithoutProductionsInput;
  product?: ProductCreateNestedManyWithoutProductionsInput;
  quantity?: number | null;
};
