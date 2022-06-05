import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import List from "./Component/List";
import { useEffect, useState } from "react";


import "./App.css";
function App() {
  const [set , useSet] = useState("b")
  const [url, setUrl] = useState(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${set}`
  );
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {console.log(data.meals);
        setUrl(data.meals);
        setImageList(data.meals);
       
      });

  });
  const [ imageList , setImageList] = useState([])
  
  return (
    <div>
    <Header/>

      <List image={imageList} />
      
    </div>
  );
}

export default App;
