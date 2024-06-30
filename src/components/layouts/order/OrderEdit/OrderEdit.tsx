import {
  ArrayInput,
  BooleanInput,
  Edit,
  ImageField,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  useRecordContext,
} from "react-admin";

const UrlField = ({ source }: { source: string }) => {
  console.log(source);

  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={`#/users/${record.user.id}`} target="_blank">
      Ссылка на пользователя
    </a>
  );
};

export const OrderEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="status" />
      <NumberInput source="price" />
      <NumberInput source="count" />
      <TextInput source="address.value" />
      <ArrayInput source="products">
        <SimpleFormIterator>
          <TextInput source="title" />
          <NumberInput source="salePercent" />
          <ImageField source="images" />
          <TextInput source="categories" />
          <NumberInput source="price" />
          <BooleanInput source="inStock" />
          <NumberInput source="priceWithSale" />
          <NumberInput source="count" />
        </SimpleFormIterator>
      </ArrayInput>
      <UrlField source="user.id" />
    </SimpleForm>
  </Edit>
);
