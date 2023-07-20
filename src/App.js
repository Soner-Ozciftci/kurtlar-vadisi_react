import React, {useState} from "react";
import "./App.css";
import Data from './Data.json'

function App() {
  const  [ searchTerm , setSearchTerm] = useState("");
  return (
  <div className="container">
    <h1>Kurtlar Vadisi Konsey Üyeleri</h1>
<div className="inputContainer">
<input className="search" type="text" placeholder="Konsey Üyesi Giriniz.."/>
</div>

  </div>;
  )
}

export default App;
