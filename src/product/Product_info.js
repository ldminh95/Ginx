export default function ProductInfo({info}) {
    return(
        <div className="box_info">
            <div className="box_caption">
                <span>{info.caption}</span>
            </div>
            <div className="box_title">
                <h4>{info.title}</h4>
            </div>
            <div className="box_price">
                <span>${info.price}</span>
            </div>
        </div>
    )
}