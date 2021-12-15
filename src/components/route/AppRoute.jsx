import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Course from '../common/Course'
import Navmenu from '../common/Navmenu'
import Home from '../Home'

class AppRoute extends Component {
    render() {
        return (
        <>
   <Navmenu />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hello" component={Course}/>
        </Switch>

        </>
        )
    }
}

export default AppRoute
