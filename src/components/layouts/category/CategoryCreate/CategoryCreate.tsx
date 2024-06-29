import { Create, SimpleForm, TextInput } from "react-admin";

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="Категория" />
      <TextInput
        source="parent"
        label="Родительская категория (если нет, то сам становится родителем)"
      />
    </SimpleForm>
  </Create>
);
