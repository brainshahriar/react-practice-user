import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Addstudent from './pages/Addstudent'
import Editstudent from './pages/Editstudent';
import Student from './pages/Student'

class Approute extends Component {
    render() {
        return (
       <>
       <Switch>
           <Route exact path="/" component={Student}/>
           <Route exact path="/add-student" component={Addstudent} />
           <Route exact path="/edit-student/:id" component={Editstudent} />
       </Switch>
       </>
        )
    }
}

export default Approute
