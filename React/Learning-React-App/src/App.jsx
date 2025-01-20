import "./App.css";
import Products  from "./Products.jsx";
import ProductsList from "./ProductLists.jsx";
import Button from "./Button.jsx";
import FormSubmit from "./Form.jsx";
import Hello from "./React-Code-Stoic/Props.jsx";

function App() {
    return (
        <>
       <Hello Hello="Hi there everyone" message = "How are you all"/>
       <Hello Hello="Hi there everyone" message = "How are "/>
       <Hello Hello="Hi there everyone" message = "How are all"/>
        </>
    ) 
}

export default App;