import Products from "./Products";
function ProductsList() {
    let features = ["soft", "good-stuff", "neat-and-clean"];
    return (
        <>
     {/* <Products title="Mens Clothes"  feature = {features}/> */}
     <Products title = "Mens Clothes" price = {1000} />
     <Products title = "Womens Clothes" price = {5000} />
     <Products title = "Womens Clothes" price = {10000} />
        </>
    )
}

export default ProductsList;