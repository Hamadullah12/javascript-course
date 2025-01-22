import Car from "./Car"

export default function Cars() {
    
    const carsDetails = [
       {Company : "Toyota", Color : "Grey", Price:"100", Rating : "⭐🌟🌟⭐⭐"},
       {Company : "Honda", Color : "Black", Price:"170",Rating : "⭐🌟🌟⭐⭐"},
       {Company : "Suzuki ", Color : "White", Price:"200",Rating : "⭐🌟🌟⭐⭐"}
    ]
    
    return (
        <div>
            
            {carsDetails.map((car) => (
                <Car key={car.Company} company={car.Company} color={car.Color} price={car.Price} rating={car.Rating} />
))}

            
            {/* for city test */}
            
                
      
        </div>
    )
       
}