import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {

    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className="cart_items">
        <div className="cart_items_format_main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
         {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div>
                    <div className="cart_items_format cart_items_format_main">
                     <img src={e.image} alt="" className='cart_icon_product_icon' />
                     <p>{e.name}</p>
                     <p>${e.new_price}</p>
                     <button className='cart_items_quantity' >{cartItems[e.id]}</button>
                     <p>${e.new_price * cartItems[e.id]}</p>
                     <img className='cart_items_remove_icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr/>
                </div>  
            }
            return null;
        })}
        <div className="cart_items_down">
            <div className="cart_items_total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cart_items_total_items">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cart_items_total_items">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cart_items_total_items">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart_items_promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cart_items_promobox">
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems