import {
  ArrayField,
  ChipField,
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const OrderList = () => (
  <List>
    <Datagrid rowClick="edit">
      <ReferenceField source="id" reference="order" />
      <TextField source="status" />
      <NumberField source="price" />
      <NumberField source="count" />
      <TextField source="address.value" />
      <ArrayField source="products">
        <SingleFieldList>
          <ChipField source="_id" />
        </SingleFieldList>
      </ArrayField>
      <TextField source="user.id" />
    </Datagrid>
  </List>
);
