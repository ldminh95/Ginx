import logo from './logo.svg';
import './App.css';
import Product_title from './title/Product_title.js';
import Product_image from './product/Product_image.js';
import Product_info from './product/Product_info.js';
import nutrition from './images/sp1.jpg';
import Oxywhey from './images/sp2.jpg';
import NutritionBCAA from './images/sp3.jpg';
import Muscle from './images/sp4.jpg';


function App() {
  return (
    <div className="App">
      <Product_title/>
      <section className='Container'>
        <div className='box'>
          <div className='box_item'>
            <Product_image
				product = {{link: nutrition, name: "16 Optimum Nutrition Gold Standard Pre Advanced"}}
			/>
			<Product_info
				info = {{
					caption: "SHAKES & POWDERS",
					title: "16 Optimum Nutrition Gold Standard Pre Advanced",
					price: 68.99
				}}
			/>
          </div>
		  <div className='box_item'>
            <Product_image
				product = {{link: Oxywhey, name: "4 EHP Labs Oxywhey Lean Wellness Protein4 EHP Labs Oxywhey Lean Wellness Protein"}}
			/>
			<Product_info
				info = {{
					caption: "SHAKES & POWDERS",
					title: "4 EHP Labs Oxywhey Lean Wellness Protein",
					price: 68.99
				}}
			/>
          </div>
		  <div className='box_item'>
            <Product_image
				product = {{link: NutritionBCAA, name: "15 Optimum Nutrition Boost BCAA"}}
			/>
			<Product_info
				info = {{
					caption: "WHEY PROTEIN",
					title: "15 Optimum Nutrition Boost BCAA",
					price: 56.30
				}}
			/>
          </div>
		  <div className='box_item'>
            <Product_image
				product = {{link: Muscle, name: "12 NZ Muscle Whey Protein 1Kg Bag-Gingerbread Milk"}}
			/>
			<Product_info
				info = {{
					caption: "WHEY PROTEIN",
					title: "12 NZ Muscle Whey Protein 1Kg Bag-Gingerbread Milk",
					price: 29.99
				}}
			/>
          </div>
		  <div className='box_item'>
            <Product_image
				product = {{link: nutrition, name: "12 NZ Muscle Whey Protein 1Kg Bag-Gingerbread Milk"}}
			/>
			<Product_info
				info = {{
					caption: "MASS GAINER",
					title: "1 100% Hydrolyzed Whey Protein",
					price: 59.99
				}}
			/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
