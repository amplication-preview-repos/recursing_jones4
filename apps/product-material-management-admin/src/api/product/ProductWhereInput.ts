import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductionListRelationFilter } from "../production/ProductionListRelationFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { IntFilter } from "../../util/IntFilter";

export type ProductWhereInput = {
  costPrice?: FloatFilter;
  description?: StringFilter;
  id?: StringFilter;
  productName?: StringFilter;
  productions?: ProductionListRelationFilter;
  profit?: DecimalFilter;
  salesPrice?: FloatFilter;
  status?: "Active" | "Inactive";
  stock?: IntFilter;
};
