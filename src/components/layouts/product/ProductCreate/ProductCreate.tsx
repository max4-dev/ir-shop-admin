import {
  BooleanInput,
  Create,
  ImageField,
  ImageInput,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { URL_CONSTANTS } from "../../../../providers";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <NumberInput source="salePercent" label="Скидка в процентах" />
      <TextInput source="description" label="Описание" />
      <ImageInput source={URL_CONSTANTS.uploadFile} label="Related pictures">
        <ImageField source="src" title="title" />
      </ImageInput>
      <TextInput source="categories" label="Категории" />
      <NumberInput source="price" label="Цена" />
      <BooleanInput source="inStock" label="В наличии" />
    </SimpleForm>
  </Create>
);
