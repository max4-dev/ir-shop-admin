import {
  BooleanInput,
  Create,
  NumberInput,
  SelectArrayInput,
  SimpleForm,
  TextInput,
  useCreate,
} from "react-admin";
import { useState } from "react";

import { Output, Uploader } from "../../../shared/ui";
import { useChildCategories } from "../../../../hooks/useChildCategories";
import { IProduct } from "../../../entities/product/types";

import styles from "./ProductCreate.module.scss";

export const ProductCreate = () => {
  const [images, setImages] = useState<string[]>([]);
  const { formattedChildCategories } = useChildCategories();

  const [create] = useCreate();

  const productSave = (data: IProduct) => {
    create("products", { data: { ...data, images } });
  };

  return (
    <>
      {images && <img className={styles.img} src={images[images.length - 1]} alt="" />}
      <Uploader images={images} setImages={setImages} />
      <Create>
        <SimpleForm onSubmit={productSave}>
          <Output source="images" label="images" value={images} />
          <TextInput source="title" label="Название" />
          <NumberInput source="salePercent" label="Скидка в процентах" />
          <TextInput source="description" label="Описание" />
          <SelectArrayInput
            source="categories"
            choices={formattedChildCategories}
            label="Категория"
            optionValue="name"
          />
          <NumberInput source="price" label="Цена" />
          <BooleanInput source="inStock" label="В наличии" />
        </SimpleForm>
      </Create>
    </>
  );
};
