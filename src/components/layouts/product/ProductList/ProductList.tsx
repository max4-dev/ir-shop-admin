import {
  BooleanField,
  Datagrid,
  ImageField,
  List,
  NumberField,
  ReferenceField,
  SearchInput,
  TextField,
} from "react-admin";

import { ProductFilter } from "../../filter/FilterList/FilterList";

import styles from "./ProductList.module.scss";

const postFilters = [<SearchInput source="title" alwaysOn />];

export const ProductList = () => (
  <List
    className={styles.productList}
    aside={<ProductFilter className={styles.aside} />}
    filters={postFilters}
  >
    <Datagrid rowClick="edit" className={styles.productListTable}>
      <ReferenceField source="id" reference="products" />
      <TextField source="title" label="Название" />
      <NumberField source="salePercent" label="Скидка в процентах" />
      <TextField source="description" label="Описание" sortable={false} />
      <TextField source="images" label="Изображения" sortable={false} />
      <TextField source="categories" label="Категории" sortable={false} />
      <NumberField source="price" label="Цена" />
      <BooleanField source="inStock" label="В наличии" />
      <NumberField source="priceWithSale" label="Цена со скидкой" />
    </Datagrid>
  </List>
);
