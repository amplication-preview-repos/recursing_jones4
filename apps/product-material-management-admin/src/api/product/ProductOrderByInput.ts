import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  costPrice?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  productName?: SortOrder;
  profit?: SortOrder;
  salesPrice?: SortOrder;
  status?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
