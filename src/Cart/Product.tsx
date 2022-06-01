import React, {useEffect, useRef, useState} from 'react'
import {NavLink, useMatch} from "react-router-dom";
import data from '../config/products.json'
import s from './product.module.scss'
import {useFormik} from "formik";
import {actions} from "../Store/goodsReducer";
import {useDispatch} from "react-redux";
import {SizeChart} from "./SizeChartModal";
import logo_facebook from './../imges/logo-facebook.png'
import logo_twitter from './../imges/logo_twitter.png'
import {ModalCart} from "./CartModal";
import {useLockBodyScroll, useToggle} from "react-use";
import {CarouselForCart} from "./CarouselForCart";

export const Product = (props: any) => {

    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])

    const match = useMatch('/products/:product/');
    const productName = match?.params.product
    type ObjectKey = keyof typeof data;
    const myVar = productName as ObjectKey;
    const size = [{value: 'S', id: 1}, {value: 'M', id: 2}, {value: 'L', id: 3}, {value: 'XL', id: 4}, {value: '2XL', id: 5}]
    const [sizeStatus, setSizeStatus] = useState(1)
    const [sizeParam, setSizeParam] = useState('S')
    const [descriptionStatus, setDescriptionStatus] = useState(false)
    const [shippingStatus, setShippingStatus] = useState(false)
    const [askQuestionStatus, setAskQuestionStatus] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = (name: string, email:string, message:string) =>  {
        dispatch(actions.setUserName(name))
        dispatch(actions.setUserEmail(email))
        dispatch(actions.setUserMessage(message))
    }
    const {handleSubmit, handleChange, values, resetForm} = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        onSubmit: ({name, email, message}) => {
            onSubmit(name, email, message)
            resetForm()
        }
    })
    const [sizeChartStatus, setSizeChartStatus] = useState(false)
    const [cartStatus, setCartStatus] = useState(false)
    const [locked, toggleLocked] = useToggle(false)
    useLockBodyScroll(locked);
    const imagesForCarousel = [{image: data[myVar].value.url, id: 1}, {image: data[myVar].value.secondUrl, id: 2}]
    const refForFirstImage = React.useRef() as React.MutableRefObject<HTMLInputElement>
    const refForSecondImage = React.useRef() as React.MutableRefObject<HTMLInputElement>
    return (
        <div className={s.goods_cart_section}>
            <div>
                <CarouselForCart images={imagesForCarousel} firstImageLocation={refForFirstImage}
                secondImageLocation={refForSecondImage}/>
            </div>
            <div className={s.productCart}>
                <div ref={refForFirstImage}>
                    <img src={data[myVar].value.url} alt="cap"/>
                </div>
                <div ref={refForSecondImage}>
                    <img src={data[myVar].value.secondUrl} alt="cap"/>
                </div>
            </div>
            <div className={s.description_section}>
                <div>
                    <h1>
                        {data[myVar].description}
                    </h1>
                    <p className={s.price_section}>
                        {data[myVar].price}
                    </p>
                    <p className={s.shipping_section}><NavLink to='/pages/shipping-policy'>Shipping</NavLink> calculated at checkout.</p>
                </div>
                <div className={s.size_section}>
                    <p>Size</p>
                    <ul>
                        {size.map((item) => {
                            return (
                                <li key={item.id}
                                    onClick={ () => { setSizeStatus(item.id); setSizeParam(item.value) } }
                                    className={sizeStatus === item.id ? s.size_status_active : ''}>
                                        {item.value}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={s.modal_size_chart} onClick={ () => setSizeChartStatus(true)}>
                    <p className={s.size_chart}><u>Size Chart</u></p>
                </div>
                <SizeChart active={sizeChartStatus} setActive={setSizeChartStatus}>

                </SizeChart>
                    <div className={s.cart_buttons_section}>
                        <button
                            onClick={ () => { setCartStatus(true);
                            toggleLocked(true) } }
                            className={s.add_to_cart}>
                            add to cart
                        </button>
                        <button className={s.buy_it_now}>buy it now</button>
                    </div>
                <ModalCart cart={cartStatus} setCart={setCartStatus} setLocker={toggleLocked}
                description={data[myVar].description} image={data[myVar].value.url} price={data[myVar].price}
                size={sizeParam}>

                </ModalCart>
                    <div className={s.about_section}>
                        <ul>
                            <li onClick={ () => setDescriptionStatus(!descriptionStatus)}>Description</li>
                            <div className={descriptionStatus ? s.goods_describer_active : s.goods_describer}>
                                <p>some description</p>
                            </div>
                            <li onClick={ () => setShippingStatus(!shippingStatus)}>Shipping information</li>
                            <div className={shippingStatus ? s.shipping_status_active : s.shipping_status}>
                                <div>
                                    <p>All shipping information are <NavLink to='/pages/shipping-policy'>here</NavLink></p>
                                </div>
                            </div>
                            <li onClick={ () => setAskQuestionStatus(!askQuestionStatus)}>Ask a question</li>
                            <div className={askQuestionStatus ? s.question_status_active : s.question_status}>
                                <form onSubmit={handleSubmit}>
                                    <div className={s.contact_us_form_name}>
                                        <div>
                                            <p>Name</p>
                                            <input name='name' onChange={handleChange}
                                                   value={values.name} />
                                        </div>
                                        <div>
                                            <p>Email</p>
                                            <input name='email' onChange={handleChange}
                                                   value={values.email} />
                                        </div>
                                    </div>
                                    <div className={s.contact_us_form_message}>
                                        <div>
                                            <p>Message</p>
                                            <textarea  wrap='off' rows={10} cols={30} name='message' onChange={handleChange}
                                                       value={values.message} />
                                        </div>
                                        <button type='submit' onClick={ () => onSubmit}>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </ul>
                    </div>
                    <div className={s.share_twitt}>
                        <div>
                            <a href="https://www.facebook.com/sharer.php?u=https://emosnotdead.com/products/fringed-long-sleeve-charcoal">
                                <img src={logo_facebook} alt="facebook"/>
                                <p>Share</p>
                            </a>
                        </div>
                        <div>
                            <a href="https://twitter.com/share?text=Fringed%20Long%20Sleeve%20-%20Charcoal&url=https://emosnotdead.com/products/fringed-long-sleeve-charcoal">
                                <img src={logo_twitter} alt="twitter"/>
                                <p>Tweet</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}