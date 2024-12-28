import "./Products.css";
import Price from "./Price";
function Products({ title, idx}) {
    let oldPrice =["500", "600", "900", "490"]
    let newPrice = ["300", "400", "500", "290"]
    let prodDesc = [
       [ "New Classical collection", "New Classical collection"],
        ["Latest Brands of all features","New Classical collection"],
        ["Strond supportive bike","New Classical collection"],
        ["happy user laptops ", "New Classical collection"]
    ]
    return (
        <div className="Products">
            <h3>{title}</h3>
            <p>{ prodDesc[idx][0]}</p>
            <p>{ prodDesc[idx][1]}</p>
            <Price oldPrice= {oldPrice[idx]} newPrice= {newPrice[idx]} />
    </div>
    )
}

export default Products;