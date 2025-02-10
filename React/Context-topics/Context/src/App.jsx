import { createContext, useState } from "react";
import CheckOut from "./CheckOut";
import Login from "./Login";
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("guest");
  return (
    <div>
      <UserContext.Provider value={{ user,setUser }}>
        <Login />
        <CheckOut />
      </UserContext.Provider>
    </div>
  );
}

export default App;
