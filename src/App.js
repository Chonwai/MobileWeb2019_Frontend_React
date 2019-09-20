import React from 'react';
import './App.css';
import "./index.css";
import FooterNav from "./Components/FooterNav/index"
import Header from "./Components/Header/index"
import {Route, BrowserRouter} from "react-router-dom";
import Post from "./Views/Post/index"

function App() {
    return (
        <BrowserRouter>
            <div className="App" id="App">
                <Header/>
                <div className="router-view mt-14">
                    <Route path="/post" component={Post}></Route>
                </div>
                <FooterNav/>
            </div>
        </BrowserRouter>
    );
}

export default App;