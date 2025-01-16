import { SortOrder } from "../../util/SortOrder";

export type ProductionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
