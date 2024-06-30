import {
  ArrayInput,
  BooleanInput,
  Edit,
  NumberInput,
  ReferenceField,
  SimpleForm,
  SimpleFormIterator,
  TextField,
  TextInput,
} from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="phone" />
      <TextInput source="name" />
      <ArrayInput source="orders">
        <SimpleFormIterator>
          <TextInput source="id" />
          <TextInput source="status" />
          <NumberInput source="price" />
          <NumberInput source="count" />
          <TextInput source="address.value" />
          <ArrayInput source="products">
            <SimpleFormIterator>
              <TextInput source="title" />
              <NumberInput source="salePercent" />
              <TextInput source="images" />
              <TextInput source="categories" />
              <NumberInput source="price" />
              <BooleanInput source="inStock" />
              <NumberInput source="priceWithSale" />
              <NumberInput source="count" />
            </SimpleFormIterator>
          </ArrayInput>
          <TextInput source="user.id" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
