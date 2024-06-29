import { Admin, Resource } from "react-admin";

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
      </Admin>
    </Providers>
  );
}

export default App;
