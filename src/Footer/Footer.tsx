import React from 'react'
import instagram from './../imges/instagram.png'
import facebook from './../imges/facebook.png'
import twitter from './../imges/twitter.png'
import youtube from './../imges/youtube.png'
import s from './footer.module.scss'
import {NavLink} from "react-router-dom";

export const Footer = () => {
    const icons = [{value: instagram, to: '/instagram.com/emosnotdead777'}, {value: facebook, to: '/facebook.com/emosnotdead777'},
        {value: twitter, to: 'twitter.com/emosnotdead'}, {value: youtube, to: '/youtube.com/c/emosnotdead'}]
    const footerNavigation = [
        {value: 'FAQS', to: '/emosnotdead.com/pages/faqs'}, {value: 'Contact Us', to: '/emosnotdead.com/pages/contact-us'},
        {value: 'Shipping Info', to: '/emosnotdead.com/pages/shipping-policy'}, {value: 'Return & Exchanges', to: '/emosnotdead.com/pages/returns-exchanges'},
        {value: 'Refund Policy', to: '/emosnotdead.com/pages/refund-policy'}, {value: 'Privacy Policy', to: '/emosnotdead.com/pages/privacy-policy'},
        {value: 'Terms of Service', to: '/emosnotdead.com/pages/terms-of-service'}]

    const iconsSection = icons.map((item, index) =>
        <NavLink to={item.to}>
            <img src={item.value} alt={item.to} key={index}/>
        </NavLink>)
    const navigationSection = footerNavigation.map((item, index) =>
        <NavLink to={item.to} key={index}>
            <p>{item.value}</p>
        </NavLink>)

    return (
        <footer className={s.footer_section}>
            <div>
                {iconsSection}
            </div>
            <div className={s.navigation_section}>
                {navigationSection}
            </div>
            <div className={s.last_footer_section}>
                <p>
                    &#169; 2022 Emo's Not Dead est. Nineteen-Eighty Whatever
                </p>
            </div>
        </footer>
    )
}