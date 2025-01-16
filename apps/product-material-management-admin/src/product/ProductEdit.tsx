import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { ProductionTitle } from "../production/ProductionTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="cost_price" source="costPrice" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="product_name" source="productName" />
        <ReferenceArrayInput source="productions" reference="Production">
          <SelectArrayInput
            optionText={ProductionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput label="profit" source="profit" />
        <NumberInput label="sales_price" source="salesPrice" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "active", value: "Active" },
            { label: "inactive", value: "Inactive" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="stock" source="stock" />
      </SimpleForm>
    </Edit>
  );
};
