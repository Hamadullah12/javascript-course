import { useContext } from "react";
import { UserContext } from "./App";

export default function CheckOut() {
  const { user } = useContext(UserContext);
  return <div>Check Out as {user}</div>;
}
