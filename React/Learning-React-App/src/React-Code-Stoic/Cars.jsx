import Car from "./Car"

export default function Cars() {
    
    const carsDetails = [
       {Company : "Toyota", Color : "Grey", Rating : "⭐🌟🌟⭐⭐"},
       {Company : "Honda", Color : "Black", Rating : "⭐🌟🌟⭐⭐"},
       {Company : "Suzuki ", Color : "White", Rating : "⭐🌟🌟⭐⭐"}
    ]
    
    return (
        <div>
            
            {carsDetails.map((car) => (
                <Car key={car.Company} company={car.Company} color={car.Color} rating={car.Rating} />
))}

            
            {/* for city test */}
            
                
      
        </div>
    )
       
}