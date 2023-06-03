import nutrition from '../images/sp1.jpg';
import Oxywhey from '../images/sp2.jpg';
import NutritionBCAA from '../images/sp3.jpg';
import Muscle from '../images/sp4.jpg';

function imageProduct({product}) {
    return(
        <img
            className="product_image"
            src = {product.link}
            alt = 
        />
    )
}

export default function boxImage() {
    return(
        <imageProduct
            product = {{
                link: {nutrition},
                name: '16 Optimum Nutrition Gold Standard Pre Advanced'
            }}
        />
        <imageProduct
            product = {{
                link: {Oxywhey},
                name: '16 Optimum Nutrition Gold Standard Pre Advanced'
            }}
        />
        <imageProduct
            product = {{
                link: {NutritionBCAA},
                name: '16 Optimum Nutrition Gold Standard Pre Advanced'
            }}
        />
        <imageProduct
            product = {{
                link: {Muscle},
                name: '16 Optimum Nutrition Gold Standard Pre Advanced'
            }}
        />
    )
}