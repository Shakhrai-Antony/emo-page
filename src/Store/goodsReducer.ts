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
import notdeadteee from './../imges/emogoods/notdeadtee.png'
import verymuchalivehoodie from './../imges/emogoods/verymuchalivehoodie.png'
import ElectricHorseTee from './../imges/emogoods/ElectricHorseTee.png'
import endblackdyehoodie from './../imges/emogoods/endblackdyehoodie.png'
import endblackdyetee from './../imges/emogoods/endblackdyetee.png'
import endpinktee from './../imges/emogoods/emogoodsladies/endpinktee.png'
import endpinkhoodie from './../imges/emogoods/emogoodsladies/endpinkhoodie.png'
import endlavendertee from './../imges/emogoods/emogoodsladies/endlavendertee.png'
import endlavenderhoodie from './../imges/emogoods/emogoodsladies/endlavenderhoodie.png'
import trucktee from './../imges/emogoods/trucktee.png'
import undeadhoodie from './../imges/emogoods/undeadhoodie.png'
import bitesleeve from './../imges/emogoods/bitesleeve.png'
import endforkstee from './../imges/emogoods/endforkstee.png'
import roseswhite from './../imges/emogoods/roseswhite.png'
import rosesblack from './../imges/emogoods/rosesblack.png'
import rivivalwhitetee from './../imges/emogoods/rivivalteewhite.png'
import rivivalblacktee from './../imges/emogoods/rivivalteeblack.png'
import rivivaltourblack from './../imges/emogoods/rivivaltourblack.png'
import notdeadsleeveblack from './../imges/emogoods/notdeadsleeveblack.png'
import notdeadsleevewhite from './../imges/emogoods/notdeadsleevewhite.png'
import endlongsleeveblack from './../imges/emogoods/endlongsleeveblack.png'
import endyouthtee from './../imges/emogoods/emogoodskids/endyouthtee.png'
import endyouthhoodie from './../imges/emogoods/emogoodskids/endyouthhoodie.png'
import youthemokidtee from './../imges/emogoods/emogoodskids/youthemokidtee.png'
import emokidhoodie from './../imges/emogoods/emogoodskids/emokidhoodie.png'
import notdead3tee from './../imges/emogoods/emogoodskids/3-6notdeadtee.png'
import notdead3hoodie from './../imges/emogoods/emogoodskids/3-6notdeadhoodie.png'
import giftcard from './../imges/emogoods/giftcard.png'
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
    merchSection: [
        {value: notdeadbluehoodie, description: 'stacked & repeat hoodie - mint',
        path: '/collections/all-products/products/stacked-repeat-hoodie-mint', id: 1, price: `$64.95`},
        {value: notdeadpinkhoodie, description: 'stacked & repeat hoodie - pink',
        path: '/collections/all-products/products/stacked-repeat-hoodie-pink', id: 2, price: `$64.95`},
        {value: coffee, description: 'triste mexicana blend coffee',
        path: '/collections/all-products/products/triste-mexicana-blend-coffee', id: 3, price: `$16.95`},
        {value: whitesocks, description: 'e.n.d. socks - white',
        path: '/collections/all-products/products/e-n-d-socks-white', id: 4, price: `$14.95`},
        {value: blackhandcup, description: 'live forever coffee mug',
            path: '/collections/all-products/products/live-forever-coffee-mug', id: 5, price: `$19.95`},
        {value: greyrosecup, description: 'weeping rose coffee mug',
            path: '/collections/all-products/products/weeping-rose-coffee-mug', id: 6, price: `$19.95`},
        {value: notdeadcap, description: 'emo\'s not dead snapback - black',
            path: '/collections/all-products/products/emos-not-dead-snapback-black', id: 7, price: `$39.95`},
        {value: alivecap, description: 'very much alive snapback - black',
            path: '/collections/all-products/products/v-m-a-snapback-black', id: 8, price: `$39.95`},
        {value: end_dad_cap, description: 'e.n.d. snapback - black',
            path: '/collections/all-products/products/e-n-d-snapback', id: 9, price: `$39.95`},
        {value: dadhat, description: 'broken heart beanie',
            path: '/collections/all-products/products/broken-heart-beanie', id: 10, price: `$24.95`},
        {value: notdeadteee, description: 'emo\'s not dead tee - black',
            path: '/collections/all-products/products/emos-not-dead-tee-black', id: 11, price: `$29.95`},
        {value: emohoodieblack, description: 'emo\'s not dead hoodie - black',
            path: '/collections/all-products/products/emos-not-dead-hoodie-black', id: 12, price: `$54.95`},
        {value: teegray, description: 'e.n.d. vintage tee',
            path: '/collections/all-products/products/e-n-d-vintage-tee', id: 13, price: `$29.95`},
        {value: emohoodiegray, description: 'e.n.d. vintage hoodie',
            path: '/collections/all-products/products/e-n-d-vintage-hoodie', id: 14, price: `$64.95`},
        {value: muchalivetee, description: 'very much alive tee - black',
            path: '/collections/all-products/products/very-much-alive-tee-black', id: 15, price: `$29.95`},
        {value: verymuchalivehoodie, description: 'very much alive hoodie - black',
            path: '/collections/all-products/products/very-much-alive-hoodie-black', id: 16, price: `$59.95`},
        {value: muchalivewhitetee, description: 'very much alive tee - white',
            path: '/collections/all-products/products/very-much-alive-white', id: 17, price: `$29.95`},
        {value: ElectricHorseTee, description: 'electric horse tee - black',
            path: '/collections/all-products/products/electric-horse-tee-black', id: 18, price: `$34.95`},
        {value: zipblackwhitehoodie, description: 'e.n.d. zip hoodie - black/white',
            path: '/collections/all-products/products/e-n-d-zip-hoodie-black-white', id: 19, price: `$54.95`},
        {value: zipblackhoodie, description: 'e.n.d. zip hoodie - black/red',
            path: '/collections/all-products/products/black-red-zip-up-hoodie', id: 20, price: `$54.95`},
        {value: scremocoffee, description: 'screamo blend coffee',
            path: '/collections/all-products/products/screamo-blend-coffee', id: 21, price: `$16.95`},
        {value: blackheartcoffee, description: 'black heart blend coffee',
            path: '/collections/all-products/products/black-heart-blend-coffee', id: 22, price: `$16.95`},
        {value: notdeadmug, description: 'emo\'s not dead coffee mug',
            path: '/collections/all-products/products/emos-not-dead-coffee-mug', id: 23, price: `$15.95`},
        {value: makermug, description: 'e.n.d. heart coffee mug',
            path: '/collections/all-products/products/e-n-d-heart-coffee-mug', id: 24, price: `$15.95`},
        {value: endblackdyetee, description: 'crystal dye tee - black',
            path: '/collections/all-products/products/crystal-dye-tee-black', id: 25, price: `$34.95`},
        {value: endblackdyehoodie, description: 'crystal dye hoodie - black',
            path: '/collections/all-products/products/crystal-dye-hoodie-black', id: 26, price: `$64.95`},
        {value: nodeadteegirlblack, description: 'ladies sweet script tee - charcoal',
            path: '/collections/all-products/products/ladies-sweet-script-tee-charcoal', id: 27, price: `$34.95`},
        {value: hoodigirlpink, description: 'sweet script crop hoodie - cotton candy',
            path: '/collections/all-products/products/sweet-script-crop-hoodie-cotton-candy', id: 28, price: `$44.95`},
        {value: hoodiegirlblack, description: 'e.n.d. crop hoodie - black',
            path: '/collections/all-products/products/ladies-e-n-d-crop-hoodie-black', id: 29, price: `$44.95`},
        {value: teegirlblack, description: 'crystal dye crop tee - black',
            path: '/collections/all-products/products/crystal-dye-crop-tee-black', id: 30, price: `$29.95`},
        {value: teegirlpink, description: 'crystal dye crop tee - lavender',
            path: '/collections/all-products/products/crystal-dye-crop-tee-lavender', id: 31, price: `$29.95`},
        {value: teegirlblue, description: 'crystal dye crop tee - blue',
            path: '/collections/all-products/products/crystal-dye-crop-tee-blue', id: 32, price: `$29.95`},
        {value: endpinktee, description: 'crystal dye tee - lavender',
            path: '/collections/all-products/products/crystal-dye-tee-lavender', id: 33, price: `$34.95`},
        {value: endpinkhoodie, description: 'crystal dye hoodie - lavender',
            path: '/collections/all-products/products/crystal-dye-hoodie-lavender', id: 34, price: `$64.95`},
        {value: endlavendertee, description: 'crystal dye hoodie - lavender',
            path: '/collections/all-products/products/crystal-dye-tee-blue', id: 35, price: `$34.95`},
        {value: endlavenderhoodie, description: 'crystal dye hoodie - blue',
            path: '/collections/all-products/products/crystal-dye-hoodie-blue', id: 36, price: `$64.95`},
        {value: trucktee, description: 'hoopty truck tee - black',
            path: '/collections/all-products/products/hoopty-truck-tee-black', id: 37, price: `$34.95`},
        {value: undeadhoodie, description: 'emo\'s undead hoodie - black',
            path: '/collections/all-products/products/emos-undead-hoodie-black', id: 38, price: `$59.95`},
        {value: bitesleeve, description: 'bite long sleeve - black/white',
            path: '/collections/all-products/products/bite-long-sleeve-black-white', id: 39, price: `$39.95`},
        {value: endforkstee, description: 'forks baseball tee - navy/white',
            path: '/collections/all-products/products/forks-baseball-tee-navy-white', id: 40, price: `$39.95`},
        {value: rosesblack, description: '19-80 whatever tee - black',
            path: '/collections/all-products/products/19-90-whatever-tee-black', id: 41, price: `$34.95`},
        {value: roseswhite, description: '19-80 whatever tee - white',
            path: '/collections/all-products/products/19-90-whatever-tee-white', id: 42, price: `$34.95`},
        {value: rivivalblacktee, description: 'from the grave tee - black',
            path: '/collections/all-products/products/from-the-grave-tee-black', id: 43, price: `$34.95`},
        {value: rivivalwhitetee, description: 'from the grave long sleeve - white',
            path: '/collections/all-products/products/from-the-grave-long-sleeve-white', id: 44, price: `$39.95`},
        {value: notdeadsleeveblack, description: 'fringed long sleeve - charcoal',
            path: '/collections/all-products/products/fringed-long-sleeve-charcoal', id: 45, price: `$39.95`},
        {value: notdeadsleevewhite, description: 'fringed long sleeve - white',
            path: '/collections/all-products/products/fringed-long-sleeve-white', id: 46, price: `$39.95`},
        {value: rivivaltourblack, description: 'parade tee - black',
            path: '/collections/all-products/products/parade-tee-black', id: 47, price: `$34.95`},
        {value: endlongsleeveblack, description: 'fill or burst long sleeve - black',
            path: '/collections/all-products/products/fill-or-burst-long-sleeve-black', id: 48, price: `$39.95`},
        {value: dadhatlove, description: 'e.n.d. heart strapback - black',
            path: '/collections/all-products/products/e-n-d-dad-hat-black', id: 49, price: `$34.95`},
        {value: end_dad_cap, description: 'e.n.d. strapback - black',
            path: '/collections/all-products/products/e-n-d-strapback-black', id: 50, price: `$34.95`},
        {value: leatherwalletend, description: 'e.n.d. classic skinny wallet + keychain',
            path: '/collections/all-products/products/e-n-d-classic-skinny-wallet-keychain-bundle', id: 51, price: `$39.95`},
        {value: leatherwalletlove, description: 'e.n.d. heart skinny wallet + keychain',
            path: '/collections/all-products/products/e-n-d-heart-skinny-wallet-keychain-bundle', id: 52, price: `$39.95`},
        {value: endyouthtee, description: 'youth e.n.d. tee - black',
            path: '/collections/all-products/products/youth-e-n-d-tee-black', id: 53, price: `$21.95`},
        {value: endyouthhoodie, description: 'youth e.n.d. hoodie - black',
            path: '/collections/all-products/products/youth-e-n-d-hoodie-black', id: 54, price: `$39.95`},
        {value: youthemokidtee, description: 'youth emo kid tee - black',
            path: '/collections/all-products/products/youth-emo-kid-tee-black', id: 55, price: `$21.95`},
        {value: emokidhoodie, description: 'youth emo kid hoodie - black',
            path: '/collections/all-products/products/youth-emo-kid-hoodie-black', id: 56, price: `$39.95`},
        {value: notdead3tee, description: 'e.n.d toddler tee - black',
            path: '/collections/all-products/products/e-n-d-toddler-tee-black', id: 57, price: `$19.95`},
        {value: notdead3hoodie, description: 'e.n.d toddler hoodie - black',
            path: '/collections/all-products/products/e-n-d-toddler-hoodie-black', id: 58, price: `$29.95`},
        {value: giftcard, description: 'digital gift card',
            path: '/collections/all-products/products/emos-not-dead-digital-gift-card', id: 59, price: `from $25.00`}
    ],
    email: '' as string,
    itemsOnPage: 24,
    currentPage: 1,
    totalItemsCount: 0
}
initialState.totalItemsCount = initialState.merchSection.length


const goodsReducer = (state = initialState, action: GoodsReducerType) => {
    switch (action.type) {
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.email
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state;
    }
}

type GoodsReducerType = InferActionsTypes<typeof actions>

export const actions = {
    setUserEmail: (email: string) => {
        return ({type: 'SET_EMAIL', email} as const)
    },
    setNewPage: (page: number) => {
        return ({type: 'SET_CURRENT_PAGE', page} as const)
    }
}

export default goodsReducer