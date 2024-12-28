import Products from "./Products";
function ProductsList() {
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }
    return (
        <div style={styles}>
     <Products title="Seconda Classical Watch" idx={0} />
     <Products title = "BMW Classical Car" idx={1} />
     <Products title = "Yamaha Classical Bike" idx={2} />
     <Products title = "Hp Laptop Cori-5" idx={3} />
     
        </div>
    )
}

export default ProductsList;