import { Edit, FunctionField, SimpleForm, TextInput } from "react-admin";
import { ListItemButton } from "@mui/material";

import { IUser } from "../../../../redux/auth/types";
import { IOrder } from "../../../../redux/order/types";
import { IProduct } from "../../../entities/product/types";
import { UrlField } from "../../../shared/ui";
import { Product } from "../../../entities/product/ui";

import styles from "./UserEdit.module.scss";

export const UserEdit = () => {
  const renderProducts = (products: IProduct[]) => {
    return products.map((product: IProduct) => <Product {...product} />);
  };

  const findOrderById = (userOrders: IOrder[] | undefined) => {
    if (!userOrders) {
      return null;
    }

    return (
      <div>
        Заказы:
        {userOrders.map((order: IOrder, index) => (
          <ul className={styles.order} key={order.id}>
            <ListItemButton component="li">
              <UrlField source={`orders.${index}.id`} resource="order">
                id: {order.id}
              </UrlField>
            </ListItemButton>
            <ListItemButton component="li">Адрес: {order.address.value}</ListItemButton>
            <ListItemButton component="li">Цена: {order.price}</ListItemButton>
            <ListItemButton component="li">Количество: {order.count}</ListItemButton>
            <ListItemButton component="li">Статус: {order.status}</ListItemButton>
            <li>{renderProducts(order.products)}</li>
          </ul>
        ))}
      </div>
    );
  };

  return (
    <Edit>
      <SimpleForm>
        <TextInput source="phone" />
        <TextInput source="name" />
        <FunctionField render={(record: IUser) => findOrderById(record?.orders)} />
      </SimpleForm>
    </Edit>
  );
};
