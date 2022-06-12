import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {actions} from "../../Store/goodsReducer";
import s from './contactus.module.scss';
import * as Yup from 'yup'

export const ContactUs = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])
    const dispatch = useDispatch()
    const onSubmit = (name: string, email:string, message:string) =>  {
        dispatch(actions.setUserName(name))
        dispatch(actions.setUserEmail(email))
        dispatch(actions.setUserMessage(message))
    }
    const [orderTrack, setOrderTrack] = useState(false)
    const [internationalFees, setInternationalFees] = useState(false)
    const [sizeChart, setSizeChart] = useState(false)
    const [returnOrder, setReturnOrder] = useState(false)

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
    return (
        <div className={s.contact_us_section}>
            <h1>frequently asked questions</h1>
            <div>
                <ul>
                    <li onClick={ () => setOrderTrack(!orderTrack) }>How do I track my order?</li>
                    <div className={orderTrack ? s.order_track_active : s.order_track}>
                        <p>Once your order has shipped you will receive a tracking link via email. From there you will be able to track your order. If you did not receive a tracking link please reach out to customer service via our portal.</p>
                    </div>
                    <li onClick={ () => setInternationalFees(!internationalFees) }>Does your international shipping include customs fees and duties?</li>
                    <div className={internationalFees ? s.international_fees_active : s.international_fees}>
                        <p>If you've placed an order outside of the United States, your order may be subject to customs fees. Every country has its own set of regulations so please contact your local postal service or customs office to learn more about how your country handles taxes and duties.</p>
                        <p>We are not responsible for any additional fees that your country may charge for importing goods, and it is the sole responsibility of the customer to pay customs fees.</p>
                        <p>Also, please be aware that there may be rare occurrences where customs will delay the transit time of some packages.</p>
                    </div>
                    <li onClick={ () => setSizeChart(!sizeChart) }>Do you have a size chart?</li>
                    <div className={sizeChart ? s.size_chart_active : s.size_chart}>
                        <p>Each product has a size chart link above the 'add to cart' button on each product page.</p>
                    </div>
                    <li onClick={ () => setReturnOrder(!returnOrder) }>Can I return or exchange my order?</li>
                    <div className={returnOrder ? s.return_order_active : s.return_order}>
                        <p>Here is a link to our full <NavLink to='/pages/returns-exchanges'><u>Return & Exchange Policy</u></NavLink> page.</p>
                    </div>
                </ul>
            </div>
            <div>
                <h1>contact us</h1>
                <div className={s.contact_us_form}>
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
                                <textarea  wrap='off' rows={10} cols={30} name='message' onChange={handleChange}
                                          value={values.message} onBlur={handleBlur}/>
                                {touched.message && errors.message ?
                                    <div className={s.error}>{errors.message}</div> : null
                                }
                            </div>
                        </div>
                        <button type='submit' onClick={ () => onSubmit}>
                            SEND
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}