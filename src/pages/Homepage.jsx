import React, { Component } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import Featureproduct from '../components/home/Featureproduct'
import Newarrival from '../components/home/Newarrival'

class Homepage extends Component {
    render() {

        
        return (
            <>
            <Featureproduct/>
            <Newarrival/>
            <Collection/>
            <Categories/>
            </>
        )
    }
}

export default Homepage
