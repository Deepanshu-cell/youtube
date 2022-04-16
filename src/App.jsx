import Intro from "./components/intro/Intro.jsx";
import About from "./components/About/About";
import ProductList from "./components/productList/ProductList.jsx";
import Contact from "./components/contact/Contact.jsx";
import Toggle from "./components/toggle/Toggle.jsx";
import { useContext } from "react";
import { ThemeContext } from "./context.js";
import "./App.css";
const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="main"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
