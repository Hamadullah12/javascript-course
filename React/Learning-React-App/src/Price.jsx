export default function Price({ oldPrice, newPrice }) {
    let oldStyles = {
        textDecoration: "line-through"
    }
    let newStyles = {
        fontWeight: "bold"
    }
    let styles = {
        backgroundColor: "Yellow",
        height: "32px",
        borderBottomLeftRadius: " 14px",
        borderBottomRightRadius: " 14px"
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>  {oldPrice}</span>
&nbsp; &nbsp; 
            <span style={newStyles}>{newPrice}</span>
        </div>
    );
}