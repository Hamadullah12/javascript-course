export default function Cars() {
    
    const carsDetails = [
       {Company : "Toyota", Color : "Grey", Rating : "⭐🌟🌟⭐⭐"},
       {Company : "Honda", Color : "Black", Rating : "⭐🌟🌟⭐⭐"},
       {Company : "Suzuki ", Color : "White", Rating : "⭐🌟🌟⭐⭐"}
    ]
    const cityTest =[
        {
            Name: "Peshawar 😎", 
            Food: "Meat",
            Clothes: "Shalwar kameez and patki",
            BestThing: "Hospitality"
        },
        {
            Name: "Karachi ", 
            Food: "late Cravings",
            Clothes: "Pant shirts",
            BestThing: "pan hahaha"
        },
        {
            Name: "Islamabad", 
            Food: "burger thinfs fast food",
            Clothes: "trousers ",
            BestThing: "burger boys "
        }
    ]
    return (
        <div>
            
            {/* {carsDetails.map((car) => (
                <li key={car.Company}>
                    {car.Company} {car.Color}  ${car.Rating}
                </li>
            ))} */}

            {/* for city test */}
            
                {cityTest.map((city) => (
                    <li key={city.Name}>
                        {city.Name} {city.Food} {city.Clothes} {city.BestThing}
                    </li>
                ))}
      
        </div>
    )
       
}