import React, {useEffect} from 'react'
import s from './returnsExchanges.module.scss'

export const ReturnsExchanges = () => {

    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className={s.returns_exchanges_section}>
            <h1>returns & exchanges</h1>
            <div className={s.return_section}>
                <h2>returns</h2>
                <p>Items purchased directly from our website may be returned within 30 days from the date of shipment for a full refund to the original form of payment or a store credit for the full price of the item(s). The item(s) must be unopened, unworn, and without any visible damage.</p>
                <p>The total amount refunded will be credited to your payment method that was used at the time of purchase (minus shipping) or as store credit once the package arrives at our facility and the item(s) are inspected.</p>
                <div className={s.return_address_column}>
                    <h3>Send items that are eligible for a refund to:</h3>
                    <p>Emo's Not Dead</p>
                    <p>1287 Oak St. Unit B</p>
                    <p>Ashland OR 97520</p>
                </div>
                <p>Please include your original invoice or a note with your order number and email! </p>
            </div>
            <div className={s.international_returns_section}>
                <h2>international returns</h2>
                <p>Please be aware, international returns are subject to different limitations. Due to significant increased international return costs, all international returns are only eligible for store credit equal to the dollar amount of purchase (minus shipping and handling). All international customers will be responsible in providing their own return shipping.</p>
            </div>
            <div className={s.exchanges_section}>
                <h2>exchanges</h2>
                <p>Due to constantly fluctuating inventory levels and product availability, we are unable to accept exchanges. If you wish to exchange an item or items, your best option is to return your items for a store credit.</p>
                <h3>Items that are ineligible for a refund or exchange:</h3>
                <ul>
                    <li>Returned after 30 days from the day of shipment</li>
                    <li>Condition of product is unsatisfactory to be resold (stains, pet hair, unpleasant scent, worn, washed)</li>
                    <li>Items sold in Mystery Packs/Boxes or Clearance Section</li>
                    <li>Items purchase on-site at a festival or event</li>
                </ul>
                <p>Please allow 7-10 business days for your return to be verified. You will receive an email confirmation once it has been approved. From there the money will take anywhere from 3-5 business days to be back in your account. </p>
            </div>
        </div>
    )
}