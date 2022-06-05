import React, {lazy, Suspense} from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Footer} from "./Footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Product} from "./Cart/Product";
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
import {CartComponent} from "./CartComponent/CartComponent";
import {Preloader} from "./Preloader/Preloader";

const MerchComponent = lazy(() => import("./MerchComponent/MerchComponents"))
const CollectionComponent = lazy(() => import("./CollectionsComponent/CollectionComponent"))
const WatchComponent = lazy(() => import("./WatchComponent/WatchComponent"))
const PlayerComponent = lazy(() => import("./Player/Player"))

function App() {
    return (
        <div>
            <Header/>
            <div>
                <Suspense fallback={<Preloader/>}>
                <Routes>
                    <Route path={'/preloader'} element={<Preloader/>}/>
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
                    <Route path='/playlist' element={<PlayerComponent/>}/>
                    <Route path='/cart' element={<CartComponent/>}/>
                    <Route path='/pages/faqs' element={<Faqs/>}/>
                    <Route path='/pages/contact-us' element={<ContactUs/>}/>
                    <Route path='/pages/returns-exchanges' element={<ReturnsExchanges/>}/>
                    <Route path='/pages/refund-policy' element={<RefundPolicy/>}/>
                    <Route path='/pages/privacy-policy' element={<PrivacyPolicy/>}/>
                    <Route path='/policies/terms-of-service' element={<TermsOfService/>}/>
                </Routes>
                </Suspense>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
