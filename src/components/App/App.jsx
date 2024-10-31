import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBar />
    </>
  );
}

export default App;
