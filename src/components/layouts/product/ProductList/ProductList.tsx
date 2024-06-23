import { BooleanField, Datagrid, List, NumberField, ReferenceField, TextField } from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="id" reference="products" />
      <TextField source="title" />
      <NumberField source="salePercent" />
      <TextField source="slug" />
      <TextField source="description" />
      <TextField source="images" />
      <TextField source="categories" />
      <NumberField source="price" />
      <BooleanField source="inStock" />
      <NumberField source="priceWithSale" />
    </Datagrid>
  </List>
);
