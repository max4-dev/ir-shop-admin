import { BooleanInput, Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <NumberInput source="salePercent" label="Скидка в процентах" />
      <TextInput source="description" label="Описание" />
      <TextInput source="images" label="Изображения" />
      <TextInput source="categories" label="Категории" />
      <NumberInput source="price" label="Цена" />
      <BooleanInput source="inStock" label="В наличии" />
    </SimpleForm>
  </Edit>
);
