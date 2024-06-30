import { ArrayField, ChipField, Datagrid, List, SingleFieldList, TextField } from "react-admin";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="phone" />
      <TextField source="name" />
      <ArrayField source="orders">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="role" />
    </Datagrid>
  </List>
);
