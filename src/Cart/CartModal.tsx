import React, {useState} from 'react'
import s from './cartModal.module.scss'

export const ModalCart = (props: any) => {

    const [count, setCount] = useState(1)

    return (
        <div onClick={ () => props.setCart(false) } className={props.cart ? s.modal_active : s.modal}>
            <div className={props.cart ? s.modal_content_active : s.modal_content} onClick={ e => e.stopPropagation() }>
                <div className={s.span_close_cart}>
                    <span onClick={ () => { props.setCart(false); props.setLocker(false) } }
                          className={s.close_size}>X</span>
                </div>
                <div>
                    <div className={s.description_section}>
                        <img src={props.image} alt="image"/>
                        <h3>
                            {props.description}
                        </h3>
                    </div>
                    <div className={s.size_of_goods}>
                        {props.size}
                    </div>
                </div>
                <div className={s.count_section}>
                    <div>
                        <span onClick={ () => setCount(count - 1) }>-</span>
                        <span>{count}</span>
                        <span onClick={ () => setCount(count + 1) }>+</span>
                    </div>
                    <div className={s.price_section}>
                        {props.price}
                    </div>
                </div>
                <div className={s.order_note_section}>
                    <p>Order note</p>
                    <textarea name="message" id="" wrap="off" rows={10}/>
                </div>
                <div className={s.total_price_section}>
                    <span>Subtotal</span>
                    <span>${(parseFloat(props.price.slice(1)) * count).toFixed(2)}</span>
                </div>
                <div className={s.payment_methods_section}>
                    <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                    <button className={s.button_check_out}>CHECK OUT</button>
                    <button className={s.button_shop_pay}></button>
                    <button className={s.button_pay_pal}></button>
                    <button className={s.button_google_pay}></button>
                </div>
            </div>
        </div>
    )
}