import { Edit, FunctionField, NumberInput, SelectInput, SimpleForm, TextInput } from "react-admin";

import { IOrder } from "../../../../redux/order/types";
import { IProduct } from "../../../entities/product/types";
import { Product } from "../../../entities/product/ui";
import { UrlField } from "../../../shared/ui";

import styles from "./OrderEdit.module.scss";

const formattedStatuses = [
  { id: 1, name: "complete" },
  { id: 2, name: "delivering" },
  { id: 3, name: "pending" },
  { id: 4, name: "cancel" },
];

export const OrderEdit = () => {
  const findProductById = (products: IProduct[]) => {
    return products.map((product: IProduct) => <Product {...product} />);
  };

  return (
    <Edit>
      <SimpleForm>
        <SelectInput
          className={styles.selectInput}
          source="status"
          choices={formattedStatuses}
          label="Статус"
          optionValue="name"
        />
        <NumberInput source="price" />
        <NumberInput source="count" />
        <TextInput source="address.value" />
        <FunctionField render={(record: IOrder) => findProductById(record.products)} />
        <UrlField source="user.id" resource="users">
          Пользователь
        </UrlField>
      </SimpleForm>
    </Edit>
  );
};
