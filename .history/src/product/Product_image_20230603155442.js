export default function ProductImage({product}) {
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