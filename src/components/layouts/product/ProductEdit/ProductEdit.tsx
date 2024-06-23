import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <NumberInput source="salePercent" />
      <TextInput source="description" />
      <TextInput source="images" />
      <TextInput source="categories" />
      <NumberInput source="price" />
      <BooleanInput source="inStock" />
    </SimpleForm>
  </Edit>
);
