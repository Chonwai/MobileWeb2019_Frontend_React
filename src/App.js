import React from 'react';
import './App.css';
import "./index.css";
import "./styles/index.css"
import FooterNav from "./Components/FooterNav/index"
import Header from "./Components/Header/index"
import {Route, BrowserRouter} from "react-router-dom";
import Post from "./Views/Post/index"
import Home from "./Views/Home/index"

function App() {
    const routerView = {
        height: "calc(100vh - 3.5rem - 3.5rem)"
    };
    return (
        <BrowserRouter>
            <div className="App" id="App">
                <Header className="h-14"/>
                <div id="router-view" className="router-view mt-14 pb-14 overflow-scroll" style={routerView}>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/post" component={Post}></Route>
                </div>
                <FooterNav className="h-14"/>
            </div>
        </BrowserRouter>
    );
}

export default App;