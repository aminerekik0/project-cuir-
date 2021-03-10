import Header from './Header'
import React from 'react'
import Cards from './Cards'


function Shop(props) {
    const {  cartItems } = props
    return (
        <div>
            <Header/>
            <Cards />
        </div>
    )
}

export default Shop
