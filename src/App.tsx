import { Admin, Resource } from "react-admin";
import { ProductEdit, ProductList } from "./components/layouts";
import { authProvider, dataProvider } from "./providers";
import "./scss/style.scss";
import { LoginPage } from "./pages";

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={LoginPage}
      requireAuth
    >
      <Resource name="products" list={ProductList} edit={ProductEdit} />
    </Admin>
  );
}

export default App;
