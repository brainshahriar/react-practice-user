import React, { Component } from 'react'
import Footer from '../components/common/Footer'
import Navmenu from '../components/common/Navmenu'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import Featureproduct from '../components/home/Featureproduct'
import Hometop from '../components/home/Hometop'
import Newarrival from '../components/home/Newarrival'

class Homepage extends Component {
    render() {

        
        return (
            <>
            <Navmenu />
            <Hometop/>
            <Featureproduct/>
            <Newarrival/>
            <Collection/>
            <Categories/>
            <Footer/>
            </>
        )
    }
}

export default Homepage
