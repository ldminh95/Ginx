import logo from './logo.svg';
import './App.css';
import Product_title from './title/Product_title.js';
import Product_image from './product/Product_image.js';
import nutrition from '../images/sp1.jpg';
import Oxywhey from '../images/sp2.jpg';
import NutritionBCAA from '../images/sp3.jpg';
import Muscle from '../images/sp4.jpg';


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
			<div className='box_info'>
				<div className='box_caption'>

				</div>
				<div className='box_title'>

				</div>
				<div className='box_price'>
					<span></span>
				</div>
			</div>
          </div>
		  <div className='box_item'>
            <Product_image
				product = {{link: Oxywhey, name: "4 EHP Labs Oxywhey Lean Wellness Protein4 EHP Labs Oxywhey Lean Wellness Protein"}}
			/>
			<div className='box_info'>
				<div className='box_caption'>

				</div>
				<div className='box_title'>

				</div>
				<div className='box_price'>
					<span></span>
				</div>
			</div>
          </div>
		  <div className='box_item'>
            <Product_image
				product = {{link: NutritionBCAA, name: "15 Optimum Nutrition Boost BCAA"}}
			/>
			<div className='box_info'>
				<div className='box_caption'>

				</div>
				<div className='box_title'>

				</div>
				<div className='box_price'>
					<span></span>
				</div>
			</div>
          </div>
		  <div className='box_item'>
            <Product_image
				product = {{link: Muscle, name: "12 NZ Muscle Whey Protein 1Kg Bag-Gingerbread Milk"}}
			/>
			<div className='box_info'>
				<div className='box_caption'>

				</div>
				<div className='box_title'>

				</div>
				<div className='box_price'>
					<span></span>
				</div>
			</div>
          </div>
		  <div className='box_item'>
            <Product_image/>
			<div className='box_info'>
				<div className='box_caption'>

				</div>
				<div className='box_title'>

				</div>
				<div className='box_price'>
					<span></span>
				</div>
			</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
