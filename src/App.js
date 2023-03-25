import { useEffect, useState } from "react";
import axios from "axios";

import { Header } from "./components/Header";
import { Characters } from "./components/Characters";

import "./App.css";

let BASE_URL = "https://rickandmortyapi.com/api/character/";

function App() {
  const [chars, setChars] = useState([]);
  const [count, setCount] = useState(0);

  const getChar = () => {
    axios(BASE_URL)
      .then((res) => setChars(res.data.results));
  };

  useEffect(()=>getChar(), [])
  return (
    <div className="App">
      <Header count={count}/>
      <Characters setCount={setCount} count={count} chars={chars} />
    </div>
  );
}

export default App;
