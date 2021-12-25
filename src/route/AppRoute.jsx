import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage'



class Approute extends Component {
    render() {
        return (
       <>
       <Switch>
       <Route exact path="/" component={Homepage} />
       <Route exact path="/login" component={Loginpage} />
       </Switch>
       </>
        )
    }
}

export default Approute
