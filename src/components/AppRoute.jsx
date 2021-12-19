import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Addproduct from './Addproduct';
import Header from './Header';
import Login from './Login';
import Register from './Register';
import Updateproduct from './Updateproduct';


class Approute extends Component {
    render() {
        return (
       <>
       <Header/>
       <Switch>
           <Route exact path="/add" component={Addproduct} />
           <Route exact path="/update" component={Updateproduct} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
       </Switch>
       </>
        )
    }
}

export default Approute
