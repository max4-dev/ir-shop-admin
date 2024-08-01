import { ArrayField, ChipField, Datagrid, List, SingleFieldList, TextField } from "react-admin";

export const UserList = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="phone" label="Телефон" />
        <TextField source="name" label="Имя" />
        <ArrayField source="orders" label="Заказы">
          <SingleFieldList>
            <ChipField source="id" />
          </SingleFieldList>
        </ArrayField>
        <TextField source="role" label="Роль" />
      </Datagrid>
    </List>
  );
};
