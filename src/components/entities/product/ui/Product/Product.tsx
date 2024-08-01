import { ListItemButton } from "@mui/material";
import { Link } from "react-admin";

import { ProductProps } from "./Product.props";
import styles from "./Product.module.scss";

export const Product = ({ id, images, title, categories, priceWithSale, count }: ProductProps) => {
  return (
    <div className={styles.product} key={id}>
      <Link
        className={styles.productHeader}
        to={`${import.meta.env.VITE_PUBLIC_URL}/#/products/${id}`}
        target="_blank"
      >
        Продукт: {id}
      </Link>
      <ul>
        <li>
          <img className={styles.productImg} src={images[0]} alt="" />
        </li>
        <ListItemButton component="li">Название: {title}</ListItemButton>
        {categories && <ListItemButton component="li">Категория: {categories[0]}</ListItemButton>}
        <ListItemButton component="li">Цена со скидкой: {priceWithSale}</ListItemButton>
        <ListItemButton component="li">Количество: {count}</ListItemButton>
      </ul>
    </div>
  );
};
