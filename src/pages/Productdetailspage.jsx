import React, { Component } from 'react'
import Footer from '../components/common/Footer'
import Navmenu from '../components/common/Navmenu'
import Productdetails from '../components/productdetails/Productdetails';
import AppUrl from '../api/AppUrl';
import axios from 'axios'

export class Productdetailspage extends Component {
    constructor({match}){
        super();
        this.state={
             id:match.params.id,
             showAll:[]
        }
   }
   componentDidMount(){
        axios.get(AppUrl.ProductDetails(this.state.id)).then(response=>{
            this.setState({showAll:response.data});
        }).catch(error=>{
        })
    }
    render() {
        return (
            <>
            <div className='Desktop'>
            <Navmenu />
            </div>
            <Productdetails data={this.state.showAll}/>
            <Footer/>
            </>
        )
    }
}

export default Productdetailspage
