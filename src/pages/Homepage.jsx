import React, { Component } from 'react'
import Categories from '../components/home/Categories'
import Featureproduct from '../components/home/Featureproduct'

class Homepage extends Component {
    render() {
        return (
            <>
            <Featureproduct/>
            <Categories/>
            </>
        )
    }
}

export default Homepage
