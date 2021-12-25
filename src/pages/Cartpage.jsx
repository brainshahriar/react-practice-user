import React, { Component } from 'react'
import Cart from '../components/Cart/Cart'
import Footer from '../components/common/Footer'
import Navmenu from '../components/common/Navmenu'

class Cartpage extends Component {
    render() {

        
        return (
            <>
            <div className='Desktop'>
            <Navmenu />
            </div>
            <Cart/>
            <Footer/>
            </>
        )
    }
}

export default Cartpage
