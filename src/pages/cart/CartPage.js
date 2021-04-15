import React from 'react'
import ListCart from '../../components/cart/ListCart'
import SumCart from '../../components/cart/SumCart'

const CartPage = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-9">
                    <ListCart/>
                </div>
                <div className="col-md-3">
                    <SumCart/>
                </div>
            </div>
        </div>
    )
}

export default CartPage
