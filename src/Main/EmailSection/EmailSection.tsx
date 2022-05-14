import React, {useState} from 'react'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {actions} from "../../Store/goodsReducer";
import s from './email.module.scss'
import email from './../../imges/email.png'

export const EmailSection = () => {
    const dispatch = useDispatch()
    const onSubmit = (email:string) =>  {
        dispatch(actions.setUserEmail(email))

    }
    const {handleSubmit, handleChange, values, resetForm} = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: ({email}) => {
            onSubmit(email)
            resetForm()
        }
    })

    return (
        <div className={s.email_section}>
            <div className={s.phase}>
                <p>it was never a phase...</p>
            </div>
            <div className={s.theFirst}>
                <p>
                    Be the first to know new products, videos, event announcements & promotions!
                </p>
            </div>
            <div className={s.email}>
                <form onSubmit={handleSubmit}>
                    <input placeholder='Enter your email' name='email' onChange={handleChange}
                           value={values.email} />
                           <button onClick={ () => onSubmit}>
                              {/* <img src={email} alt="subscribe"/>*/}
                           </button>
                </form>
            </div>
        </div>
    )
}