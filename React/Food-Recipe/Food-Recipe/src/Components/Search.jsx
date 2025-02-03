import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = " https://api.spoonacular.com/recipes/complexSearch";
// const API_KEY = "8a6c34f362d5440b96fc21728ae42576";
const API_KEY = "b7804eefd6934db1910edc54793d4c1e";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("drink");
  // syntax for useEffect()
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.inputContainer}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
