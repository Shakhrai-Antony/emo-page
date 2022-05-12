import {createReducer} from "@reduxjs/toolkit";
import notdeadcap from './../imges/emogoods/not_dead_cap.png'
import alivecap from './../imges/emogoods/alive_cap.png'
import coffee from './../imges/emogoods/coffee.png'
import greyrosecup from './../imges/emogoods/grey_rose_cup.png'
import notdeadbluehoodie from './../imges/emogoods/not_dead_blue_hoodie.png'
import notdeadpinkhoodie from './../imges/emogoods/not_dead_pink_hoodie.png'
import whitesocks from './../imges/emogoods/white_socks.png'
import blackhandcup from './../imges/emogoods/black_hand_cup.png'
import emohoodieblack from './../imges/emogoods/emohoodieblack.png'
import emohoodiegray from './../imges/emogoods/emohoodiegray.png'
import muchalivetee from './../imges/emogoods/muchalivetee.png'
import muchalivewhitetee from './../imges/emogoods/muchalivewhitetee.png'
import teeblack from './../imges/emogoods/teeblack.png'
import teegray from './../imges/emogoods/teegray.png'
import zipblackhoodie from './../imges/emogoods/zipblackhoodie.png'
import zipblackwhitehoodie from './../imges/emogoods/zipblackwhitehoodie.png'

const initialState = {
    goods: [
        {value: notdeadcap, to: '/notdeadcap', description: 'emo\'s not dead snapback - black', id: 1, price: `$33.95`},
        {value: alivecap, to: '/alivecap', description: 'very much alive snapback - black', id: 2, price: `$33.95`},
        {value: coffee, to: '/coffee', description: 'triste mexicana black coffee', id: 3, price: `$16.95`},
        {value: greyrosecup, to: '/greyrosecup', description: 'weeping rose coffee mug', id: 4, price: `$19.95`},
        {
            value: notdeadbluehoodie,
            to: '/notdeadbluehoodie',
            description: 'stacked & repeat hoodie - blue',
            id: 5,
            price: `$64.95`
        },
        {
            value: notdeadpinkhoodie,
            to: '/notdeadpinkhoodie',
            description: 'stacked & repeat hoodie - pink',
            id: 6,
            price: `$64.95`
        },
        {value: whitesocks, to: '/whitesocks', description: 'e.n.d. socks - white', id: 7, price: `$14.95`},
        {value: blackhandcup, to: '/blackhandcup', description: 'live forever coffee mug', id: 8, price: `$19.95`}
    ],
    goodsForCarousel: [
        {
            value: emohoodieblack, id: 1, description: 'emo\'s not dead hoodie - black', price: `$54.95`,
            to: '/collections/essential-end-merch/products/emos-not-dead-hoodie-black'
        },
        {
            value: emohoodiegray, id: 2, description: 'e.n.d. vintage hoodie', price: `$64.95`,
            to: '/collections/essential-end-merch/products/e.n.d.-vintage-hoodie'
        },
        {
            value: muchalivetee, id: 3, description: 'very much alive tee - black', price: `$29.95`,
            to: '/collections/essential-end-merch/products/very-much-alive-tee-black'
        },
        {
            value: muchalivewhitetee, id: 4, description: 'very much alive tee - white', price: `$29.95`,
            to: '/collections/essential-end-merch/products/very-much-alive-tee-white'
        },
        {
            value: teeblack, id: 5, description: 'emo\'s not dead tee - black', price: `$29.95`,
            to: '/collections/essential-end-merch/products/emos-not-dead-tee-black'
        },
        {
            value: teegray, id: 6, description: 'emo\'s not dead tee - gray', price: `$29.95`,
            to: '/collections/essential-end-merch/products/emos-not-dead-tee-gray'
        },
        {
            value: zipblackhoodie, id: 7, description: 'e.n.d. zip hoodie - black/red', price: `$54.95`,
            to: '/collections/essential-end-merch/products/black-red-zip-up-hoodie'
        },
        {
            value: zipblackwhitehoodie, id: 8, description: 'e.n.d. zip hoodie - black/white', price: `$54.95`,
            to: '/collections/essential-end-merch/products/black-white-zip-up-hoodie'
        }
    ]
}

const goodsReducer = createReducer(initialState, (builder) => {

    return initialState

})

export default goodsReducer