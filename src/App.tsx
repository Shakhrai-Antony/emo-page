import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {MerchComponent} from "./MerchComponent/MerchComponents";
import {Product} from "./Product";

function App() {

    return (
        <div>
            <Header/>
            <div>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/merch' element={<MerchComponent/>}/>
                    <Route path='/products/:product' element={<Product/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
