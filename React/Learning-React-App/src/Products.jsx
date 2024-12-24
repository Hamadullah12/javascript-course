import "./Products.css";
function Products({title, price, feature}) {
    return (
        <div className="Products">
            <h3>{ title }</h3>
            <h5>Price is {price}</h5>
            {/* <p>{feature.map((feature) =>
                <li>{feature} </li>)}</p> */}
            {price > 2000 && <p>Discount 26%</p>}
    </div>
    )
}

export default Products;