import { StringFilter } from "../../util/StringFilter";
import { MaterialListRelationFilter } from "../material/MaterialListRelationFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductionWhereInput = {
  id?: StringFilter;
  material?: MaterialListRelationFilter;
  product?: ProductListRelationFilter;
  quantity?: IntNullableFilter;
};
