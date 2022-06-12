import React, {useState} from 'react'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {actions} from "../../Store/goodsReducer";
import s from './email.module.scss'
import * as Yup from 'yup'

export const EmailSection = () => {
    const dispatch = useDispatch()
    const onSubmit = (email:string) =>  {
        dispatch(actions.setUserEmail(email))

    }
    const {handleSubmit, handleChange, values, resetForm, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email()
                .max(20, 'Email should be shorter than 20 characters')
                .required('Email is required'),
        }),
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
                           value={values.email} onBlur={handleBlur} />
                           <button onClick={ () => onSubmit}>

                           </button>
                </form>
            </div>
            {touched.email && errors.email ?
                <div className={s.error}>{errors.email}</div> : null
            }
        </div>
    )
}