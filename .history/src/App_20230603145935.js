import logo from './logo.svg';
import './App.css';
import Product_title from './title/Product_title.js';
import Product_image from './product/Product_image.js';


function App() {
  return (
    <div className="App">
      <Product_title/>
      <section className='Container'>
        <div className='box'>
          <div className='box_item'>
            <div className='box_image'>
              <Product_image/>
            </div>
			<div className='box_info'>
				<div className='box_caption'>

				</div>
				<div className='box_title'>

				</div>
				<div className='box_price'>

				</div>
			</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
