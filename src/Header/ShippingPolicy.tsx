import React, {useEffect} from 'react'
import s from './policy.module.scss'

export const ShippingPolicy = () => {

    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])

    return (
        <div className={s.shipping_policy}>
            <div className={s.shipping_policy_first_block}>
                <h1>
                    shipping policy
                </h1>
                <p>
                    We ship worldwide and offer USPS, UPS, and DHL shipping options. Please allow 1-2 business days for orders to be processed before it ships. All orders are fulfilled Monday - Friday. We do not ship on the weekends or holidays.
                </p>
                <p>
                    Tracking information is automatically sent to the email address you provide at checkout. If you do not receive tracking information within 1-2 business days after the above processing time, please check your spam folder.
                </p>
                <p>
                    During sales and holidays allow 2-5 business days for processing before shipment. Government holidays, adverse weather, and billing or fraud verifications may affect fulfillment time.
                </p>
                <p>
                    If you have any questions about our shipping policies, please shoot us an email at shop@emosnotdead.com and we'll be happy to help!
                </p>
                <p>
                    shipping estimates are not guaranteed.
                </p>
            </div>
            <div className={s.shipping_policy_second_block}>
                <h2>
                    free u.s. shipping
                </h2>
                <p>
                    For U.S. orders that total $100 or more you will have the option to select a free Standard Shipping at checkout. This is a limited time offer and subject to change at any time.
                </p>
                <p>
                    Some restrictions apply:
                </p>
                <ul>
                    <li>
                        <p>Order total less taxes and shipping charges must exceed $100. </p>
                    </li>
                </ul>
            </div>
            <div className={s.shipping_policy_third_block}>
                <h2>
                    international shipping
                </h2>
                <p>
                    International packages are estimated to take 5-30 business days; however, faster options are available. See checkout for full list of precisely calculated shipping rates. Complications with delivery are rare, but please contact the shipping carrier to handle these issues. Once the shipment has left our facilities, we are unable to offer assistance. Emo's Not Dead is not responsible for delays caused by the post office or lost packages due to address errors.
                </p>
                <p>
                    At the time of delivery customers may be subject to Duties and taxes. These are the responsibility of the customer. If you do not pay the fees, your package will be returned to Emo's Not Dead and we will refund you the cost of the order excluding shipping.
                </p>
            </div>

        </div>
    )
}