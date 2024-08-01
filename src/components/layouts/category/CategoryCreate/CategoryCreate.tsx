import { Create, SelectInput, SimpleForm, TextInput, useGetList } from "react-admin";
import { useEffect, useState } from "react";

import { defaultDataValues, formatDataOne } from "../../../../helpers/formatDataOne";

import styles from "./CategoryCreate.module.scss";

export const CategoryCreate = () => {
  const [formattedCategories, setFormattedCategories] = useState<unknown[]>([]);
  const { data } = useGetList("category");

  useEffect(() => {
    const formatted = data
      ? data
          .map((category) => {
            if (category.parent) {
              return null;
            }
            return formatDataOne(category, ...defaultDataValues);
          })
          .filter(Boolean)
      : [];

    setFormattedCategories(formatted);
  }, [data]);

  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" label="Категория" />
        <SelectInput
          className={styles.selectInput}
          source="parent"
          choices={formattedCategories}
          label="Родительская категория (если нет, то сам становится родителем)"
        />
      </SimpleForm>
    </Create>
  );
};
