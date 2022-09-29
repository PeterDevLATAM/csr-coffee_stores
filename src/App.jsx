import "./App.css";
import Home from "./pages/home.page";
import { fetchCoffeeStores } from "./lib/coffee-stores";
import { useEffect, useState } from "react";
function App() {
  const [coffeeStores, setCoffeeStores] = useState();
  useEffect(() => {
    fetchCoffeeStores().then((response) => setCoffeeStores(response));
  }, []);
  return (
    <div className="App">
      <Home coffeeStores={coffeeStores} />
    </div>
  );
}

export default App;
