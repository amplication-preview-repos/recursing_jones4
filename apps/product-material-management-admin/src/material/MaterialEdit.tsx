import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ProductionTitle } from "../production/ProductionTitle";

export const MaterialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <NumberInput label="lot_price" source="lotPrice" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput source="productions" reference="Production">
          <SelectArrayInput
            optionText={ProductionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "available", value: "Available" },
            { label: "out_of_stock", value: "OutOfStock" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="supplier" source="supplier" />
        <NumberInput label="unit_price" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};
