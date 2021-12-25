import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import AppUrl from '../api/AppUrl';
import axios from 'axios';

class Data extends Component {
    constructor({match}){
        super();
        this.state={
            id:match.params.id,
            Details:[]
        }
    }
    componentDidMount(){
        axios.get(AppUrl.details(this.state.id)).then(response=>{
            this.setState({Details:response.data});
        }).catch(error=>{
        })
    }
    render() {
        const data=this.state.Details;
        const View=data.map((data,i)=>{
            return(
            <Button>{data.name}</Button>
            )
        });
        return (
            <div>
                <>
                <h1>
                 {View}   
                </h1>
                </>
            </div>
            div not commit -n
        )
    }
}

export default Data
