import { useState } from "react"
export default function LudoBoard() {
    let [move, setMove] = useState({ Blue: 0, Yellow: 0, Green: 0, Red: 0 });

    let updateBlue = () => {
        
        console.log(move.Blue)
        setMove((previousMove) => {
            return {...previousMove, Blue: previousMove.Blue + 1}
        })
    }
    let updateYellow = () => {
        
        console.log(move.Yellow)
        setMove((previousMove) => {
            return {...previousMove, Yellow: previousMove.Yellow + 1}
        })
    }
    let updateGreen = () => {
        
        console.log(move.Green)
        setMove((previousMove) => {
            return {...previousMove, Green: previousMove.Green + 1}
        })
    }
    let updateRed = () => {
        
        console.log(move.Red)
        setMove((previousMove) => {
            return {...previousMove, Red: previousMove.Red + 1}
        })
    }



    return (
        <div>
            <h3>Game Start</h3>
            <div className="LudoMoves">
                <p>Blue = {move.Blue }</p>
                <button style={{backgroundColor: 'Blue', color: 'white'}} onClick={updateBlue}>+1</button>
                <p>Yellow ={move.Yellow} </p>
                <button style={{backgroundColor: 'Yellow', color: 'black'}} onClick={updateYellow}>+1</button>
                <p>Green ={move.Green} </p>
                <button style={{backgroundColor: 'Green', color: 'white'}} onClick={updateGreen}>+1</button>
                <p>Red ={move.Red} </p>
                <button style={{backgroundColor: 'red   ', color: 'white'}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}