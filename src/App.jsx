import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AuthProvider from "./context/auth/AuthProvider.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
    <AuthProvider>
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </AuthProvider>
    </Provider>
  );
}

export default App;
