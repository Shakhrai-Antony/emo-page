import {createAction, createReducer} from "@reduxjs/toolkit";
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
import hoodigirlpink from './../imges/emogoods/emogoodsladies/hoodi_girl_pink.png'
import hoodiegirlblack from './../imges/emogoods/emogoodsladies/hoodie_girl_black.png'
import nodeadteegirlblack from './../imges/emogoods/emogoodsladies/not_dead_girl_tee_black.png'
import teegirlblack from './../imges/emogoods/emogoodsladies/tee_girl_black.png'
import teegirlblue from './../imges/emogoods/emogoodsladies/tee_girl_blue.png'
import teegirlpink from './../imges/emogoods/emogoodsladies/tee_girl_pink.png'
import capend from './../imges/emogoods/emogoodsladies/cap_end.png'
import dadhat from './../imges/emogoods/emogoodsladies/dad_hat.png'
import dadhatlove from './../imges/emogoods/emogoodsladies/dad_hat_love.png'
import end_dad_cap from './../imges/emogoods/emogoodsladies/end_dad_cap.png'
import leatherwalletlove from './../imges/emogoods/emogoodsladies/leather_wallet_love.png'
import leatherwalletend from './../imges/emogoods/emogoodsladies/leather_wallet_end.png'
import makermug from './../imges/emogoods/emogoodsladies/maker_mug.png'
import notdeadmug from './../imges/emogoods/emogoodsladies/not_dead_mug.png'
import blackheartcoffee from './../imges/emogoods/black_heart_coffee.png'
import scremocoffee from './../imges/emogoods/scremo_coffee.png'
import indaclub from './../imges/videoimages/in_da_club.png'
import coffeeroster from './../imges/videoimages/coffee_roster.png'
import kid from './../imges/videoimages/kid.png'
import cruise from './../imges/videoimages/cruise.png'
import leaveme from './../imges/videoimages/leave_me.png'
import tommys from './../imges/videoimages/tommys.png'
import {InferActionsTypes} from "./Store";


const initialState = {
    goods: [
        {
            value: notdeadcap,
            to: '/products/emos-not-dead-snapback-black',
            description: 'emo\'s not dead snapback - black',
            id: 1,
            price: `$33.95`
        },
        {
            value: alivecap,
            to: '/products/v-m-a-snapback-black',
            description: 'very much alive snapback - black',
            id: 2,
            price: `$33.95`
        },
        {
            value: coffee,
            to: '/products/triste-mexicana-blend-coffee',
            description: 'triste mexicana black coffee',
            id: 3,
            price: `$16.95`
        },
        {
            value: greyrosecup,
            to: '/products/weeping-rose-coffee-mug',
            description: 'weeping rose coffee mug',
            id: 4,
            price: `$19.95`
        },
        {
            value: notdeadbluehoodie,
            to: '/products/stacked-repeat-hoodie-mint',
            description: 'stacked & repeat hoodie - blue',
            id: 5,
            price: `$64.95`
        },
        {
            value: notdeadpinkhoodie,
            to: '/products/stacked-repeat-hoodie-pink',
            description: 'stacked & repeat hoodie - pink',
            id: 6,
            price: `$64.95`
        },
        {
            value: whitesocks,
            to: '/products/e-n-d-socks-white',
            description: 'e.n.d. socks - white',
            id: 7,
            price: `$14.95`
        },
        {
            value: blackhandcup,
            to: '/products/live-forever-coffee-mug',
            description: 'live forever coffee mug',
            id: 8,
            price: `$19.95`
        }
    ],
    goodsForLadies: [
        {
            value: hoodigirlpink,
            to: '/products/sweet-script-crop-hoodie-cotton-candy',
            description: 'sweet script crop hoodie - cotton candy',
            price: `$44.95`,
            id: 1
        },
        {
            value: hoodiegirlblack,
            to: '/products/ladies-e-n-d-crop-hoodie-black',
            description: 'e.n.d. crop hoodie black',
            price: `$44.95`,
            id: 2
        },
        {
            value: nodeadteegirlblack,
            to: '/products/ladies_sweet_script_tee_charcoal',
            description: 'ladies sweet script tee - charcoal',
            price: `$34.95`,
            id: 3
        },
        {
            value: teegirlblack,
            to: '/products/crystal-dye-crop-tee-black',
            description: 'crystal dye crop tee - black',
            price: `$29.95`,
            id: 4
        },
        {
            value: teegirlpink,
            to: '/products/crystal-dye-crop-tee-lavender',
            description: 'crystal dye crop tee - lavender',
            price: `$29.95`,
            id: 5
        },
        {
            value: teegirlblue,
            to: '/products/crystal-dye-crop-tee-blue',
            description: 'crystal dye crop tee - blue',
            price: `$29.95`,
            id: 6
        },

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
    ],
    femaleGoodsForCarousel: [
        {
            value: leatherwalletend, id: 1, description: 'e.n.d. classic skillet wallet + keychain', price: `$39.95`,
            to: '/collections/headwear-accessories/products/e-n-d-classic-skinny-wallet-keychain-bundle'
        },
        {
            value: leatherwalletlove, id: 2, description: 'e.n.d. heart skinny wallet + keychain', price: `$39.95`,
            to: '/collections/headwear-accessories/products/e-n-d-heart-skinny-wallet-keychain-bundle'
        },
        {
            value: dadhatlove, id: 3, description: 'e.n.d. heart strapback - black', price: `$34.95`,
            to: '/collections/headwear-accessories/products/e-n-d-dad-hat-black'
        },
        {
            value: end_dad_cap, id: 4, description: 'e.n.d. strapback - black', price: `$34.95`,
            to: '/collections/headwear-accessories/products/e-n-d-strapback-black'
        },
        {
            value: notdeadcap, id: 5, description: 'emo\'s not dead snapback - black', price: `$39.95`,
            to: '/collections/headwear-accessories/products/emos-not-dead-snapback-black'
        },
        {
            value: alivecap, id: 6, description: 'very much alive snapback - black', price: `$39.95`,
            to: '/collections/headwear-accessories/products/v-m-a-snapback-black'
        },
        {
            value: capend, id: 7, description: 'e.n.d. snapback - black', price: `$39.95`,
            to: '/collections/headwear-accessories/products/e-n-d-snapback'
        },
        {
            value: whitesocks, id: 8, description: 'e.n.d. socks - white', price: `$14.95`,
            to: '/collections/headwear-accessories/products/e-n-d-socks-white'
        },
        {
            value: notdeadmug, id: 9, description: 'emo\'s not dead coffee mug', price: `$15.95`,
            to: '/collections/headwear-accessories/products/emos-not-dead-coffee-mug'
        },
        {
            value: makermug, id: 10, description: 'e.n.d. heart coffee mug', price: `$15.95`,
            to: '/collections/headwear-accessories/products/e-n-d-heart-coffee-mug'
        },
        {
            value: blackhandcup, id: 11, description: 'live forever coffee mug', price: `$19.95`,
            to: '/collections/headwear-accessories/products/live-forever-coffee-mug'
        },
        {
            value: greyrosecup, id: 12, description: 'weeping rose coffee mug', price: `$19.95`,
            to: '/collections/headwear-accessories/products/weeping-rose-coffee-mug'
        },
        {
            value: dadhat, id: 13, description: 'broken heart beanie', price: `$24.95`,
            to: '/collections/headwear-accessories/products/broken-heart-beanie'
        }
    ],
    coffeeGoods: [
        {
            value: coffee,
            to: '/products/triste-mexicana-blend-coffee',
            description: 'triste mexicana blend coffee',
            id: 1,
            price: `$16.95`
        },
        {
            value: scremocoffee,
            to: '/products/screamo-blend-coffee',
            description: 'scremo blend coffee',
            id: 2,
            price: `$16.95`
        },
        {
            value: blackheartcoffee,
            to: '/products/black-heart-blend-coffee',
            description: 'black heart blend coffee',
            id: 3,
            price: `$16.95`
        },
        {
            value: makermug,
            to: '/products/e-n-d-heart-coffee-mug',
            description: 'e.n.d. heart coffee mug',
            id: 4,
            price: `$15.95`
        },
        {
            value: blackhandcup,
            to: '/products/live-forever-coffee-mug',
            description: 'live forever coffee mug',
            id: 5,
            price: `$19.95`
        },
        {
            value: greyrosecup,
            to: '/products/weeping-rose-coffee-mug',
            description: 'weeping rose coffee mug',
            id: 6,
            price: `$19.95`
        }
    ],
    videosSection: [
        {
            value: indaclub,
            to: '/blogs/felt-emo-might-delete/felt-emo-in-da-club',
            id: 1,
            description: 'felt emo in da club',
            date: 'apr 06, 2022'
        },
        {
            value: coffeeroster,
            to: '/blogs/felt-emo-might-delete/felt-emo-might-brew-coffee',
            id: 2,
            description: 'felt emo might brew coffee',
            date: 'feb 28, 2022'
        },
        {
            value: kid,
            to: '/blogs/felt-emo-might-delete/felt-emo-might-delete-4',
            id: 3,
            description: 'felt emo again might delete',
            date: 'feb 08, 2022'
        },
        {
            value: cruise,
            to: '/blogs/felt-emo-might-delete/felt-emo-might-cruise',
            id: 4,
            description: 'felt emo might cruise',
            date: 'jan 27, 2022'
        },
        {
            value: leaveme,
            to: '/blogs/felt-emo-might-delete/felt-emo-might-delete-3',
            id: 5,
            description: 'felt emo might delete',
            date: 'oct 18, 2021'
        },
        {
            value: tommys,
            to: '/blogs/felt-emo-might-delete/your-broken-hero-tommys-face-ft-spencer-chamberlain',
            id: 6,
            description: 'your broken hero - tommy\'s face ft. spencer chamberlain of underoath',
            date: 'apr 17, 2021'
        }
    ],
    email: '' as string
}


const goodsReducer = (state = initialState, action: GoodsReducerType) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }
        default:
            return state;
    }
}

type GoodsReducerType = InferActionsTypes<typeof actions>

export const actions = {
    setUserEmail: (email: string): any => {
        return ({type: 'SET_EMAIL', email} as const)
    }
}

export default goodsReducer