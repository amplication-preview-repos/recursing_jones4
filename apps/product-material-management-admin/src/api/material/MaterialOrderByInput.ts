import { SortOrder } from "../../util/SortOrder";

export type MaterialOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lotPrice?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  stock?: SortOrder;
  supplier?: SortOrder;
  unitPrice?: SortOrder;
  updatedAt?: SortOrder;
};
