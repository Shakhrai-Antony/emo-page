import React, {useEffect, useRef, useState} from 'react'
import {NavLink, useMatch} from "react-router-dom";
import s from './product.module.scss'
import {useFormik} from "formik";
import {actions} from "../Store/goodsReducer";
import {useDispatch, useSelector} from "react-redux";
import {SizeChart} from "./SizeChartModal";
import logo_facebook from './../imges/logo-facebook.png'
import logo_twitter from './../imges/logo_twitter.png'
import {ModalCart} from "./CartModal";
import {useLockBodyScroll, useToggle} from "react-use";
import {CarouselForCart} from "./CarouselForCart";
import * as Yup from 'yup'
import {getGoods} from "../Store/goodsSelectors";

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
    const size = [{value: 'S', id: 1}, {value: 'M', id: 2}, {value: 'L', id: 3}, {value: 'XL', id: 4}, {
        value: '2XL',
        id: 5
    }]
    const [sizeStatus, setSizeStatus] = useState(1)
    const [sizeParam, setSizeParam] = useState('S')
    const [descriptionStatus, setDescriptionStatus] = useState(false)
    const [shippingStatus, setShippingStatus] = useState(false)
    const [askQuestionStatus, setAskQuestionStatus] = useState(false)
    const dispatch = useDispatch()
    const onSubmit = (name: string, email: string, message: string) => {
        dispatch(actions.setUserName(name))
        dispatch(actions.setUserEmail(email))
        dispatch(actions.setUserMessage(message))
    }
    const addGoodsToCart = (goods: object) => {
        dispatch(actions.setGoodsInCart(goods))
    }
    const addGoodsSizeToCart = (size: string) => {
        dispatch(actions.setGoodsSize(size))
    }
    const addGoodsAmountToCart = (amount: number) => {
        dispatch(actions.setGoodsCount(amount))
    }
    const addGoodsPriceToCart = (price: number | string) => {
        dispatch(actions.setGoodsPrice(price))
    }
    const addCountToCart = (amount: number) => {
        dispatch(actions.setAmountOfGoods(amount))
    }
        const {handleSubmit, handleChange, values, resetForm, touched, errors, handleBlur} = useFormik({
            initialValues: {
                name: '',
                email: '',
                message: ''
            },
            validationSchema: Yup.object({
                name: Yup.string()
                    .min(3, 'Name should be longer than 2 characters')
                    .max(15, 'Name should be shorter than 15 characters')
                    .required('Name is required'),
                email: Yup.string()
                    .email()
                    .max(20, 'Email should be shorter than 20 characters')
                    .required('Email is required'),
                message: Yup.string()
                    .max(100, 'Messages should be shorter than 100 characters')
                    .required('Message is required')
            }),
            onSubmit: ({name, email, message}) => {
                onSubmit(name, email, message)
                resetForm()
            }
        })
        const [sizeChartStatus, setSizeChartStatus] = useState(false)
        const [cartStatus, setCartStatus] = useState(false)
        const [locked, toggleLocked] = useToggle(false)
        useLockBodyScroll(locked);
        const [count, setCount] = useState(1)
        const [countForCart, setCountForCart] = useState(1)
        const productData = useSelector(getGoods).filter((item: any) => item.to === `/products/${productName}`)[0]
    console.log(useSelector(getGoods).filter((item: any) => item.to === `/products/${productName}`))
    console.log(productData)
        return (
            <div className={s.goods_cart_section}>
                <div>
                    <CarouselForCart data={productData}
                    />
                </div>
                <div className={s.productCart}>
                    {productData.images.map((item: any) => {
                        return (
                            <div id={item.image} key={item.id}>
                                <img src={item.image} alt=""/>
                            </div>
                        )
                    })}
                </div>
                <div className={s.description_section}>
                    <div>
                        <h1>
                            {productData.description}
                        </h1>
                        <p className={s.price_section}>
                            {productData.price}
                        </p>
                        <p className={s.shipping_section}><NavLink
                            to='/pages/shipping-policy'>Shipping</NavLink> calculated at checkout.</p>
                    </div>
                    <div className={s.size_section}>
                        <p>Size</p>
                        <ul>
                            {size.map((item) => {
                                return (
                                    <li key={item.id}
                                        onClick={() => {
                                            setSizeStatus(item.id);
                                            setSizeParam(item.value)
                                        }}
                                        className={sizeStatus === item.id ? s.size_status_active : ''}>
                                        {item.value}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={s.amount_section}>
                        <p>Amount: </p>
                    </div>
                    <div className={s.count_section}>
                    <span onClick={ () => {
                        if (count > 1) {
                            setCount(count - 1)
                        }
                        if (countForCart > 1) {
                            setCountForCart(countForCart - 1)
                        }
                    }}>
                        -
                    </span>
                        <span>{count}</span>
                        <span onClick={ () => {
                            setCount(count + 1);
                            setCountForCart(countForCart + 1);
                        }}>
                        +
                    </span>
                    </div>
                    <div className={s.modal_size_chart} onClick={() => setSizeChartStatus(true)}>
                        <p className={s.size_chart}><u>Size Chart</u></p>
                    </div>
                    <SizeChart active={sizeChartStatus} setActive={setSizeChartStatus}>

                    </SizeChart>
                    <div className={s.cart_buttons_section}>
                        <button
                            onClick={() => {
                                setCartStatus(true);
                                toggleLocked(true);
                                addGoodsToCart(productData);
                                addGoodsSizeToCart(sizeParam);
                                addGoodsAmountToCart(count);
                                addGoodsPriceToCart(+(parseFloat(productData.price.slice(1)) * count).toFixed(2));
                                addCountToCart(countForCart)
                            }}
                            className={s.add_to_cart}>
                            add to cart
                        </button>
                        <button className={s.buy_it_now}>buy it now</button>
                    </div>
                    <ModalCart cart={cartStatus} setCart={setCartStatus} setLocker={toggleLocked}
                               data={productData}
                               size={sizeParam} count={count}>

                    </ModalCart>
                    <div className={s.about_section}>
                        <ul>
                            <li onClick={() => setDescriptionStatus(!descriptionStatus)}>Description</li>
                            <div className={descriptionStatus ? s.goods_describer_active : s.goods_describer}>
                                <p>some description</p>
                            </div>
                            <li onClick={() => setShippingStatus(!shippingStatus)}>Shipping information</li>
                            <div className={shippingStatus ? s.shipping_status_active : s.shipping_status}>
                                <div>
                                    <p>All shipping information are <NavLink to='/pages/shipping-policy'>here</NavLink>
                                    </p>
                                </div>
                            </div>
                            <li onClick={() => setAskQuestionStatus(!askQuestionStatus)}>Ask a question</li>
                            <div className={askQuestionStatus ? s.question_status_active : s.question_status}>
                                <form onSubmit={handleSubmit}>
                                    <div className={s.contact_us_form_name}>
                                        <div>
                                            <p>Name</p>
                                            <input name='name' onChange={handleChange}
                                                   value={values.name} onBlur={handleBlur}/>
                                            {touched.name && errors.name ?
                                            <div className={s.error}>{errors.name}</div> : null
                                            }
                                        </div>
                                        <div>
                                            <p>Email</p>
                                            <input name='email' onChange={handleChange}
                                                   value={values.email} onBlur={handleBlur}/>
                                            {touched.email && errors.email ?
                                            <div className={s.error}>{errors.email}</div> : null
                                            }
                                        </div>
                                    </div>
                                    <div className={s.contact_us_form_message}>
                                        <div>
                                            <p>Message</p>
                                            <textarea wrap='off' rows={10} cols={30} name='message'
                                                      onChange={handleChange}
                                                      value={values.message}
                                            onBlur={handleBlur}/>
                                            {touched.message && errors.message ?
                                            <div className={s.error}>{errors.message}</div> : null
                                            }
                                        </div>
                                        <button type='submit' onClick={() => onSubmit}>
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
