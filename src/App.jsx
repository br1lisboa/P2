import About from "./components/about/About";
import Contact from "./components/Contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList";

const App = () => {
  return ( 
    <div>
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  )
};

export default App;