import nutrition from '../images/sp1.jpg';
import Oxywhey from '../images/sp2.jpg';
import NutritionBCAA from '../images/sp3.jpg';
import Muscle from '../images/sp4.jpg';

function imageSrc({product}) {
    return(
        <img
            className="product_image"
            src = {product.link}
            alt = {product.name}
        />
    );
}

export default function productImage() {
    return(
        <div className='box_image'>
            <imageSrc
                product = {{
                    link: {nutrition},
                    name: '16 Optimum Nutrition Gold Standard Pre Advanced'
                }}
            />
        </div>
    )
}