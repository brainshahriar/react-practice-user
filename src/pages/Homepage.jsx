import React, { Component } from 'react'
import Categories from '../components/home/Categories'
import Collection from '../components/home/Collection'
import Featureproduct from '../components/home/Featureproduct'

class Homepage extends Component {
    render() {
        return (
            <>
            <Featureproduct/>
            <Collection/>
            <Categories/>
            </>
        )
    }
}

export default Homepage
