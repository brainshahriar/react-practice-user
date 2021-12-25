import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Homepage from '../pages/Homepage';



class Approute extends Component {
    render() {
        return (
       <>
       <Switch>
       <Route exact path="/" component={Homepage} />
       </Switch>
       </>
        )
    }
}

export default Approute
