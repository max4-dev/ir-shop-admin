import { Admin, ListGuesser, Resource } from "react-admin";
import "./App.css";
import { dataProvider } from "./providers/dataProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="products" list={ListGuesser} />
    </Admin>
  );
}

export default App;
