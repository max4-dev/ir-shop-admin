import {
  BooleanInput,
  Edit,
  NumberInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { useState } from "react";

import { useChildCategories } from "../../../../hooks/useChildCategories";
import { Output, Uploader } from "../../../shared/ui";

export const ProductEdit = () => {
  const [images, setImages] = useState<string[]>([]);

  const { formattedChildCategories } = useChildCategories();

  if (!formattedChildCategories || formattedChildCategories.length === 0) {
    return null;
  }

  return (
    <>
      {images && <img src={images[images.length - 1]} alt="" />}
      <Uploader images={images} setImages={setImages} />
      <Edit>
        <SimpleForm>
          <TextInput source="title" label="Название" />
          <NumberInput source="salePercent" label="Скидка в процентах" />
          <TextInput source="description" label="Описание" />
          <Output source="images" label="images" value={images} />
          <SelectArrayInput
            source="categories"
            choices={formattedChildCategories}
            label="Категория"
            optionValue="name"
          />
          <NumberInput source="price" label="Цена" />
          <BooleanInput source="inStock" label="В наличии" />
        </SimpleForm>
      </Edit>
    </>
  );
};
