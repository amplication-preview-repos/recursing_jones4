import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { ProductionListRelationFilter } from "../production/ProductionListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type MaterialWhereInput = {
  category?: StringNullableFilter;
  id?: StringFilter;
  lotPrice?: FloatFilter;
  name?: StringFilter;
  productions?: ProductionListRelationFilter;
  status?: "Available" | "OutOfStock";
  stock?: IntFilter;
  supplier?: StringNullableFilter;
  unitPrice?: FloatFilter;
};
