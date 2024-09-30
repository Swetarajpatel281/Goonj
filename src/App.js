import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import store from "./Redux/Store"

function App() {
  return (
  <>
  <Provider store={store}>
   <Navbar/>
   </Provider>
   <main>
    <Outlet/>
   </main>
   <Footer/>
  </>
  );
}


export default App;
