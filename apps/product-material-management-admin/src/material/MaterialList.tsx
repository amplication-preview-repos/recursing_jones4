import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MaterialList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Materials"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lot_price" source="lotPrice" />
        <TextField label="name" source="name" />
        <TextField label="status" source="status" />
        <TextField label="stock" source="stock" />
        <TextField label="supplier" source="supplier" />
        <TextField label="unit_price" source="unitPrice" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
