import React, {useEffect, useState} from 'react'
import {NavLink} from "react-router-dom";
import s from './faqs.module.scss'


export const Faqs = () => {
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }, [])

    const [shippingPolicy, setShippingPolicy] = useState(false)
    const [receiveShipment, setReceiveShipment] = useState(false)
    const [shippingAddress, setShippingAddress] = useState(false)
    const [orderOfShip, setOrderOfShip] = useState(false)
    const [trackOrder, setTrackOrder] = useState(false)
    const [orderLocation, setOrderLocation] = useState(false)
    const [orderReceive, setOrderReceive] = useState(false)
    const [paymentForms, setPaymentForms] = useState(false)
    const [cardIssues, setCardIssues] = useState(false)
    const [nonSterling, setNonSterling] = useState(false)
    const [returnPolicy, setReturnPolicy] = useState(false)
    const [internationalOrder, setInternationalOrder] = useState(false)
    const [orderExchange, setOrderExchange] = useState(false)
    const [washMerch, setWashMerch] = useState(false)

    return (
        <div className={s.faqs_section}>
            <h1>faqs</h1>
            <div className={s.shipping_section}>
                <h2>shipping</h2>
                <ul>
                    <li onClick={ () => setShippingPolicy( !shippingPolicy) }>What is your shipping policy</li>
                    <div className={shippingPolicy ? s.shipping_policy_active : s.shipping_policy}>
                        <p>To review our shipping policy, please click
                            <NavLink to='/pages/shipping-policy'> <u>here</u>!</NavLink>
                        </p>
                    </div>
                    <li onClick={ () => setReceiveShipment( !receiveShipment) }>Why haven't I received my shipment yet?</li>
                    <div className={receiveShipment ? s.receive_shipment_active : s.receive_shipment}>
                        <p>
                            Please allow 1-2 business days for your order to be processed. This time does not count towards the estimated shipping time. Depending on which shipping option you choose please allow the appropriate time for your order to arrive from the day it ships.
                        </p>
                        <p>
                            If it is past the approximate shipping deadline and your order has not arrived, please reach out to our customer support at <u>shop@emosnotdead.com</u>.
                        </p>
                        <p>
                            Please allow 1-2 business days for your order to be processed, this processing time does not count towards shipping time. Depending on which shipping option you choose, please keep an eye out for your shipping confirmation via email.
                        </p>
                        <p>
                            If it is past the approximate shipping deadline and your order has not arrived, please reach out to the shipping carrier selected to get the most accurate information about your package.
                        </p>
                    </div>
                    <li onClick={ () => setShippingAddress(!shippingAddress) }>What should I do if I enter an incorrect shipping address</li>
                    <div className={shippingAddress ? s.shipping_address_active : s.shipping_address}>
                        <p>
                            Orders are processed as quickly as possible and for this reason we cannot guarantee any changes to your order once it has been submitted. If you accidentally entered an incorrect shipping address, please contact us at <u>shop@emosnotdead.com</u>  letting us know you need to update your address. Please include your full name, order number, and the correct shipping address.
                        </p>
                        <p>
                            We will do our best to change the shipping address before it ships. If it does ship before we are able to fix the issue, please reply to our message when the tracking information states that it is being returned to the sender. As soon as we receive it, we will ship you out a new package.
                        </p>
                    </div>
                </ul>
            </div>
            <div>
                <h2>orders</h2>
                <ul>
                    <li onClick={ () => setOrderOfShip(!orderOfShip) }>How long will I take for my order to ship?</li>
                    <div className={orderOfShip ? s.order_of_ship_active : s.order_of_ship}>
                        <p>
                            It typically takes 1-2 business days to process orders and prepare them for shipment. This estimate does not take into account weekends or holidays. This means that an order placed on Friday might not ship until the following Tuesday, so keep this in mind when placing your order, although, we are usually under 24 hours!
                        </p>
                        <p>
                            There may be some occasions such as big promotion events or holidays such as Black Friday or Memorial Day where orders may take 4-7 business days to process due to overwhelming support from emo kids.
                        </p>
                        <p>
                            We can’t make any guarantees as to when your order will be delivered.
                        </p>
                    </div>
                    <li onClick={ () => setTrackOrder(!trackOrder) }>How do I track my order</li>
                    <div className={trackOrder ? s.track_order_active : s.track_order}>
                        <p>Once your order has shipped you will receive a tracking number via email. From there you will be able to track your order on the relevant carrier website. If you did not receive a tracking number via email, please check your spam folder before reaching out to <u>shop@emosnotdead.com</u>. We would be happy to help you!</p>
                    </div>
                    <li onClick={ () => setOrderLocation(!orderLocation) }>Where is my order shipping from?</li>
                    <div className={orderLocation ? s.order_location_active : s.order_location}>
                        <p>All orders ship from our warehouse in Ashland, Oregon.</p>
                    </div>
                    <li onClick={ () => setOrderReceive(!orderReceive) }>When will I receive my order?</li>
                    <div className={orderReceive ? s.order_receive_active : s.order_receive}>
                        <p>Please allow 1-2 business days for your order to be processed. This time does not count towards the estimated shipping time. Depending on which shipping option you choose please allow the appropriate time for your order to arrive from the day it ships.</p>
                        <p>If it is past the approximate shipping deadline and your order has not arrived, please reach out to our customer support at <u>shop@emosnotdead.com</u>.</p>
                        <p>Please allow 1-2 business days for your order to be processed, this processing time does not count towards shipping time. Depending on which shipping option you choose, please keep an eye out for your shipping confirmation via email.</p>
                        <p>If it is past the approximate shipping deadline and your order has not arrived, please reach out to the shipping carrier selected to get the most accurate information about your package.</p>
                    </div>
                </ul>
                </div>
                <div>
                    <h2>payments</h2>
                    <ul>
                        <li onClick={ () => setPaymentForms(!paymentForms) }>What form of payment do you accept?</li>
                        <div className={paymentForms ? s.payment_forms_active : s.payment_forms}>
                            <p>We accept the following forms of payment:</p>
                            <p>All major credit cards (American Express, Discover, Mastercard, VISA)</p>
                            <p>International credit cards (billing address entered at checkout must 100% match your credit card's billing address or your order will not be processed)</p>
                            <p>Apple Pay</p>
                            <p>Google Pay</p>
                            <p>Paypal</p>
                            <p>Shop Pay & Shop Pay Installments</p>
                        </div>
                        <li onClick={ () => setCardIssues(!cardIssues) }>What is your Returns & Exchanges Policy?</li>
                        <div className={cardIssues ? s.card_issues_active : s.card_issues}>
                            <p>Here is a link to our full <NavLink to='/pages/returns-exchanges'> Return & Exchange Policy page</NavLink>.</p>
                            <p>Items purchased directly from our website may be returned within 30 days from the date of shipment for a full refund to the original form of payment or a store credit for the full price of the item(s). The item(s) must be unopened, unworn, and without any visible damage.</p>
                            <p>The total amount refunded will be credited to your payment method that was used at the time of purchase (minus shipping and handling) or as store credit once the package arrives at our facility and the item(s) are inspected.</p>
                            <p>Please allow 7-10 business days for your return to be verified. You will receive an email confirmation once it has been approved. From there the money will take anywhere from 3-5 business days to be back in your account.</p>
                        </div>
                        <li onClick={ () => setNonSterling(!nonSterling) }> What is non-sterling transaction fee?
                            <div className={nonSterling ? s.non_sterling_active : s.non_sterling}>
                                <p>If you make a transaction in a foreign currency, you will be charged a non-sterling transaction fee of 2.99% on the transaction amount. If you use your Card to withdraw cash abroad a cash fee of 3% of the withdrawal amount or £3 (whichever is greater) will be payable in addition to the non-sterling transaction fee (definition taken from Google.com).</p>
                                <p>We are not responsible for Non-Sterling Transaction Fees, and it is the customer's responsibility to pay this fee.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>returns & exchanges</h2>
                    <ul>
                        <li onClick={ () => setReturnPolicy(!returnPolicy) }>What is your Returns & Exchange Policy?</li>
                        <div className={returnPolicy ? s.return_policy_active : s.return_policy}>
                            <p>Here is a link to our full <NavLink to='/pages/returns-exchanges'><u>Return & Exchange Policy</u></NavLink>  page.</p>
                        </div>
                        <li onClick={ () => setInternationalOrder(!internationalOrder) }>Can I return an order placed internationally?</li>
                        <div className={internationalOrder ? s.international_order_active : s.international_order}>
                            <p>Please be aware, international returns are subject to different limitations. Due to significantly increased international return costs, all international returns are only eligible for store credit equal to the dollar amount of purchase (minus shipping and handling).</p>
                            <p>We ask that you submit a ticket through our email <u>shop@emosnotdead.com</u>  and request for a return.</p>
                        </div>
                        <li onClick={ () => setOrderExchange(!orderExchange) }>Can I exchange my order?</li>
                        <div className={orderExchange ? s.order_exchange_active : s.order_exchange}>
                            <p>Due to constantly fluctuating inventory levels and product availability, we prefer that all exchanges be refunded so that you may place a new order for the items you want! Please reach out to us at shop@emosnotdead.com and we will help you through the process.</p>
                        </div>
                    </ul>
                </div>
                <div>
                    <h2>garment care</h2>
                    <ul>
                        <li onClick={ () => setWashMerch(!washMerch) }>How should I wash my new merch?</li>
                        <div className={washMerch ? s.wash_merch_active : s.wash_merch}>
                            <ul className={s.merch_care}>
                                <li>Reverse garment inside out prior to wash</li>
                                <li>Wash with similar colors and fabric types</li>
                                <li>Machine wash cold, using a gentle cycle. DO NOT USE fabric softeners &/or harsh chemicals such as bleach.</li>
                                <li>Always hang dry or dry flat. Avoid direct contact with sunlight.</li>
                                <li>Turn inside out before ironing. DO NOT iron directly on the face of the garment.</li>
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
    )
}