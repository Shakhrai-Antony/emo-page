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
import {ReturnsExchanges} from "./Footer/Returns & Exchanges/Returns & Exchanges";
import {RefundPolicy} from "./Footer/RefundPolicy/RefundPolicy";
import {PrivacyPolicy} from "./Footer/PrivacyPolicy/PrivacyPolicy";
import {TermsOfService} from "./Footer/TermsOfService/TermsOfService";
import {ClassicEndMerch} from "./MerchComponent/ClassicEndMerch/ClassicEndMerch";
import {CrystalDyeMerch} from "./MerchComponent/CrystalDyeMerch/CrystalDyeMerch";
import {EmoUndeadMerch} from "./MerchComponent/Emo'sUndeadMerch/EmoUndeadMerch";
import {RevivalTourMerch} from "./MerchComponent/RevivalTourMerch/RevivalTourMerch";
import {CoffeeMugsMerch} from "./MerchComponent/CoffeeAndMugs/CoffeeMugsMerch";
import {TeeAndLongSleevesMerch} from "./MerchComponent/TeeAndLongSleevesMerch/TeeAndLongSleeves";
import {HoodiesMerch} from "./MerchComponent/HoodiesMerch/HoodiesMerch";
import {HeadwearAndAccessoriesMerch} from "./MerchComponent/HeadwearAndAccessoriesMerch/HeadWearAndAccessoriesMerch";
import {GoodsForKidsMerch} from "./MerchComponent/GoodsForKidsMerch/GoodsForKidsMerch";
import {GoodsForLadiesMerch} from "./MerchComponent/GoodsForLadiesMerch/GoodsForLadiesMerch";
import {Player} from "./Player/Player";
import {CartComponent} from "./CartComponent/CartComponent";

function App() {
    return (
        <div>

            <Header/>
            <div>
                <Routes>
                    <Route path='/pages/shipping-policy' element={<ShippingPolicy/>}/>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/merch' element={<MerchComponent/>}/>
                    <Route path='/collections/coffee' element={<CoffeeMugsMerch/>}/>
                    <Route path='/collections/tees-long-sleeves' element={<TeeAndLongSleevesMerch/>}/>
                    <Route path='/collections/hoodies' element={<HoodiesMerch/>}/>
                    <Route path='/collections/headwear-accessories' element={<HeadwearAndAccessoriesMerch/>}/>
                    <Route path='/collections/emo-kids' element={<GoodsForKidsMerch/>}/>
                    <Route path='/collections/emo-girls' element={<GoodsForLadiesMerch/>}/>
                    <Route path='/collections/essential-end-merch' element={<ClassicEndMerch/>}/>
                    <Route path='/collections/tiedye21' element={<CrystalDyeMerch/>}/>
                    <Route path='/collections/revival-tour-collection' element={<RevivalTourMerch/>}/>
                    <Route path='/collections/emos-undead' element={<EmoUndeadMerch/>}/>
                    <Route path='/collections' element={<CollectionComponent/>}/>
                    <Route path='/products/:product' element={<Product/>}/>
                    <Route path='/blogs/felt-emo-might-delete/:felt' element={<WatchBlog/>}/>
                    <Route path='/watch' element={<WatchComponent/>}/>
                    <Route path='/playlist' element={<Player/>}/>
                    <Route path='/cart' element={<CartComponent/>}/>
                    <Route path='/pages/faqs' element={<Faqs/>}/>
                    <Route path='/pages/contact-us' element={<ContactUs/>}/>
                    <Route path='/pages/returns-exchanges' element={<ReturnsExchanges/>}/>
                    <Route path='/pages/refund-policy' element={<RefundPolicy/>}/>
                    <Route path='/pages/privacy-policy' element={<PrivacyPolicy/>}/>
                    <Route path='/policies/terms-of-service' element={<TermsOfService/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
