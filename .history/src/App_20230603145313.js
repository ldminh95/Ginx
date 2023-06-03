import logo from './logo.svg';
import './App.css';
import Product_title from './title/Product_title.js';
import Product from './product/Product.js';


function App() {
  return (
    <div className="App">
      <Product_title/>
      <section className='Container'>
        <Product/>
      </section>
    </div>
  );
}

export default App;
