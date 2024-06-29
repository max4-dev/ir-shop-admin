import { Datagrid, List, ReferenceField, TextField } from "react-admin";

export const CategoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="id" reference="category" />
      <TextField source="name" />
      <TextField source="parent" />
    </Datagrid>
  </List>
);
