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