import nutrition from '../images/sp1.jpg';
import Oxywhey from '../images/sp2.jpg';
import NutritionBCAA from '../images/sp3.jpg';
import Muscle from '../images/sp4.jpg';

function ImageSrc({product}) {
    return(
        <img
            className="product_image"
            src = {product.link}
            alt = {product.name}
        />  
    );
}

export default function productImage({product}) {
    return(
        <div className='box_image'>
            <img
            className="product_image"
            src = {product.link}
            alt = {product.name}
            />
        </div>
    )
}