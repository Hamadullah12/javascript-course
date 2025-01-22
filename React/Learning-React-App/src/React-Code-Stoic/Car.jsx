export default function Car({company , color , rating, price}) {
    return (
        <>
            
            {price > 150 ? (<h1>{company} {color} {rating}{price} </h1>): ""}     
    
        </>
    )
}