import React, { Component } from 'react'
import Footer from '../components/common/Footer'
import Navmenu from '../components/common/Navmenu'
import Productdetails from '../components/productdetails/Productdetails';

export class Productdetailspage extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
    render() {
        return (
            <>
            <div className='Desktop'>
            <Navmenu />
            </div>
            <Productdetails/>
            <Footer/>
            </>
        )
    }
}

export default Productdetailspage
