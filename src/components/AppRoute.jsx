import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Addproduct from './Addproduct';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Cards from './Cards';
import Updateproduct from './Updateproduct';


class Approute extends Component {
    render() {
        return (
       <>
       <Header/>
       <Switch>
       <Route exact path="/" component={Home} />
           <Route exact path="/add" component={Addproduct} />
           <Route exact path="/update" component={Updateproduct} />
           <Route exact path="/login" component={Login} />
           <Route exact path="/register" component={Register} />
           <Route exact path="/card" component={Cards} />
       </Switch>
       </>
        )
    }
}

export default Approute
