import React, { Component } from 'react'
import Contact from '../components/common/Contact'
import Footer from '../components/common/Footer'
import Navmenu from '../components/common/Navmenu'


export class Contactpage extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
    render() {
        return (
            <>
            <div className='Desktop'>
            <Navmenu />
            </div>
            <Contact/>
            <Footer/>
            </>
        )
    }
}

export default Contactpage

