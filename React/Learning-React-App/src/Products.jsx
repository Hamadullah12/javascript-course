import "./Products.css";
function Products({title, description= 1}) {
    return (
        <div className="Products">
            <h3>{ title }</h3>
            <h5>{ description }</h5>
    </div>
    )
}

export default Products;