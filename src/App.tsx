import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {MerchComponent} from "./MerchComponent/MerchComponents";
import {Product} from "./Cart/Product";
import {CollectionComponent} from "./CollectionsComponent/CollectionComponent";
import {WatchComponent} from "./WatchComponent/WatchComponent";
import {WatchBlog} from "./WatchComponent/WatchBlog";
import {ShippingPolicy} from "./Header/ShippingPolicy";
import {Faqs} from "./Footer/FAQS/FAQS";
import {ContactUs} from "./Footer/ContactUs/ContactUsComponent";

function App() {

    return (
        <div>
            <Header/>
            <div>
                <Routes>
                    <Route path='/pages/shipping-policy' element={<ShippingPolicy/>}/>
                    <Route path='/pages/contact-us' element={<ContactUs/>}/>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/merch' element={<MerchComponent/>}/>
                    <Route path='/collections' element={<CollectionComponent/>}/>
                    <Route path='/products/:product' element={<Product/>}/>
                    <Route path='/blogs/felt-emo-might-delete/:felt' element={<WatchBlog/>}/>
                    <Route path='/watch' element={<WatchComponent/>}/>
                    <Route path='/pages/faqs' element={<Faqs/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
