import React, {useLayoutEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './dropDownMenu.module.scss'

export const DropDownMerch = () => {
    const merchMenu = [{value: 'coffee & mugs', path: '/collections/coffee'},
        {value: 'tees & long sleeves', path: '/collections/tees-long-sleeves'},
        {value: 'hoodies', path: '/collections/hoodies'},
        {value: 'headwear & accessories', path: '/collections/headwear-accessories'},
        {value: 'digital gift card', path: '/products/emos-not-dead-digital-gift-card'},
    ]
    return (
        <>
            <ul className={s.dropDownMenu_section}>
                {merchMenu.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={s.drop_down_links} to={item.path}>
                                {item.value}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export const DropDownCollections = () => {

    const collectionsMenu = [{value: 'coffee & mugs', path: '/collections/coffee'},
        {value: 'emo girls', path: '/collections/emo-girls'},
        {value: 'hoodies', path: '/collections/hoodies'},
        {value: 'emo kids', path: '/collections/emo-kids'},
        {value: 'emo\'s undead', path: '/collections/emos-undead'},
        {value: 'revival tour', path: '/collections/revival-tour-collection'},
        {value: 'crystal dye', path: '/collections/tiedye21'},
        {value: 'classic merch', path: '/collections/essential-end-merch'},
    ]

    return (
        <>
            <ul className={s.dropDownCollection_menu}>
                {collectionsMenu.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink className={s.drop_down_collection_links} to={item.path}>
                                {item.value}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}