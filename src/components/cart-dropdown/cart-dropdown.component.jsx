import CustomButton from  '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss';

import React from 'react'

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
        {
            cartItems.map(cartItem => <CartItem id={cartItem.id} item={cartItem}/>)
        }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
            
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)