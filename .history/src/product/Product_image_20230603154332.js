export default function productImage({product}) {
    return(
        <div className='box_image'>
            <img
                src = {product.link}
                alt = {product.name}
            />
        </div>
    )
}