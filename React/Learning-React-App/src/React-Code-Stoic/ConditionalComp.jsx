import Bye from "./Bye";
import Welcome from "./Welcome";


export default function ConditionalComp() {
    let marks = 96;
    
   return (marks > 90  ? <h1>You got nice gradess</h1> : <h1>you got little low grades </h1>)
}