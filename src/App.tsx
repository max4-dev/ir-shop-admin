import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";

import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  ProductCreate,
  ProductEdit,
  ProductList,
} from "./components/layouts";
import { authProvider, dataProvider } from "./providers";
import { LoginPage } from "./pages";
import "./scss/style.scss";
import { Providers } from "./redux/provider";
import { UserList } from "./components/layouts/user/UserList/UserList";
import { UserEdit } from "./components/layouts/user/UserEdit/UserEdit";
import { UserCreate } from "./components/layouts/user/UserCreate/UserCreate";
import { OrderList } from "./components/layouts/order/OrderList/OrderList";
import { OrderEdit } from "./components/layouts/order/OrderEdit/OrderEdit";

function App() {
  return (
    <Providers>
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={LoginPage}
        requireAuth
      >
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
        <Resource name="category" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
        <Resource name="users" list={UserList} edit={UserEdit} />
        <Resource name="order" list={OrderList} edit={OrderEdit} />
      </Admin>
    </Providers>
  );
}

export default App;
