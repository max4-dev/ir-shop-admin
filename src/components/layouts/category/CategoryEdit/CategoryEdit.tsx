import { Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

import { useParentCategories } from "../../../../hooks/useParentCategories";

import styles from "./CategoryEdit.module.scss";

export const CategoryEdit = () => {
  const { formattedParentCategories } = useParentCategories();

  return (
    <Edit>
      <SimpleForm>
        <TextInput source="name" label="Категория" />
        <SelectInput
          className={styles.selectInput}
          source="parent"
          choices={formattedParentCategories}
          label="Родительская категория (если нет, то сам становится родителем)"
        />
      </SimpleForm>
    </Edit>
  );
};
