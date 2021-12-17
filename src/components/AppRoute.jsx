import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Addstudent from './pages/Addstudent'
import Student from './pages/Student'

class Approute extends Component {
    render() {
        return (
       <>
       <Switch>
           <Route exact path="/" component={Student}/>
           <Route exact path="/add-student" component={Addstudent} />
       </Switch>
       </>
        )
    }
}

export default Approute
