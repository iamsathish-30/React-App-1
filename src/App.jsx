import React from "react";
import Header from "./components/Header.jsx"
import Body from "./components/BodySection.jsx";
import './main.css'
const App = () =>{
    return (
        <div className="container">
            <Header/>
            <Body/>
        </div>
    );
}

export default App;