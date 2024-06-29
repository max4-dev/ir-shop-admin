import { Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" label="Категория" />
      <TextInput
        source="parent"
        label="Родительская категория (если нет, то сам становится родителем)"
      />
    </SimpleForm>
  </Edit>
);
