import React, { Component } from 'react'
import Footer from '../components/common/Footer'
import Navmenu from '../components/common/Navmenu'
import Login from '../components/common/Login'

class Homepage extends Component {
    render() {

        
        return (
            <>
            <div className='Desktop'>
            <Navmenu />
            </div>
  

            <Login/>

            <Footer/>
            </>
        )
    }
}

export default Homepage
