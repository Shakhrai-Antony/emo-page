import React, {useState} from 'react'
import s from './header.module.scss'
import {NavLink} from "react-router-dom";
import logo from './../imges/notdead.png'
import search from './../imges/search.png'
import user from './../imges/user.png'
import cart from './../imges/cart.png'

export const Header = () => {
    const items = [{value: 'Home', to: '/home'},{value: 'Merch', to: '/merch'}, {value: 'Collections', to: '/collections'},
        {value: 'Watch', to: '/watch'},{value: 'Playlist', to: '/playlist'},{value: 'Cruise', to: '/cruise'},
        {value: <img src={user} alt='user'/>, to: '/login'}, {value: <img src={search} alt='user'/>, to: '/search'},{value: <img src={cart} alt='user'/>, to: '/cart'}]
    const [isShownMerch, setIsShownMerch] = useState(false)

    return (
        <header>
            <div className={s.freeShipping}>
                <NavLink to='/home'>
                    <p>:'( free us shipping on orders $100 or more )':</p>
                </NavLink>
            </div>
            <div className={s.headerNavigation}>
                <div>
                    <NavLink to='/home'> <img src={logo} alt="logo"
                    onMouseEnter={() => setIsShownMerch(true)}
                    onMouseLeave={() => setIsShownMerch(false)}
                    />
                    </NavLink>
                    {isShownMerch ? <div>
                        Hello
                    </div> : null}
                </div>
                <nav>
                    {items.map(item =>
                            <NavLink to={item.to}>{item.value}</NavLink>
                    )}
                </nav>
            </div>
        </header>
    )
}