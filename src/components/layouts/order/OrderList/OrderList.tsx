import { Datagrid, List, NumberField, TextField } from "react-admin";

export const OrderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="status" label="Статус" />
      <NumberField source="price" label="Цена" />
      <NumberField source="count" label="Количество" />
      <TextField source="address.value" label="Адрес" />
      <TextField source="user.id" label="Пользователь" />
    </Datagrid>
  </List>
);
