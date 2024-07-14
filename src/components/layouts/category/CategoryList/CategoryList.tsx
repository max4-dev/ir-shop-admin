import { Datagrid, FunctionField, List, ReferenceField, TextField } from "react-admin";
import { useEffect } from "react";

import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../redux/store";
import { ICategory } from "../../../../redux/category/types";

export const CategoryList = () => {
  const { getGategories } = useActions();
  const { categories } = useAppSelector((state) => state.category);

  useEffect(() => {
    getGategories();
  }, []);

  const findCategoryById = (id: string | null) => {
    const findedCategory = categories && categories.find((category) => category.id === id);

    if (!findedCategory) {
      return "";
    }

    return findedCategory.name;
  };

  return (
    <List>
      <Datagrid rowClick="edit">
        <ReferenceField source="id" reference="category" />
        <TextField source="name" label="Название" />
        <FunctionField
          label="Родитель"
          render={(record: ICategory) => findCategoryById(record.parent)}
        />
      </Datagrid>
    </List>
  );
};
