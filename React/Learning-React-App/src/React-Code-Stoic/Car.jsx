export default function Car({company , color , rating, price, soldOut}) {
    return (
        <>
            
            <li>
            {company}{color}{rating}{price}{soldOut ? "soldOut": ""}
            </li>    
        </>
    )
}