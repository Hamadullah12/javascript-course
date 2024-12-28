import "./Products.css";
function Products({ title, price }) {
    let isDiscount = price > 6000; 
    let styles = { backgroundColor: isDiscount ? "red" : "" };
    return (
        <div className="Products" style = {styles}>
            <h3>{ title }</h3>
            <h5>Price is {price}</h5>
            {price > 2000 && <p>Discount 26%</p>}
    </div>
    )
}

export default Products;