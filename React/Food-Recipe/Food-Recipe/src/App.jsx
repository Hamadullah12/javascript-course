import "./App.css";
import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetail from "./Components/FoodDetail";
function App() {
  const [foodData, setFoodData] = useState([]);
  const[foodId, setFoodId]=useState("");
  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail  foodId={foodId}/>
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
