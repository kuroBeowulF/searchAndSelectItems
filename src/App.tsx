import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Layout from "./Components/Layout/Layout";
import Header from "./Components/Header/Header";
const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Layout />
    </Provider>
  );
};

export default App;
