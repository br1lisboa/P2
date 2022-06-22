import About from "./components/about/About";
import Contact from "./components/Contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";

const App = () => {
  return ( 
    <div style={{backgroundColor:"red"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  )
};

export default App;