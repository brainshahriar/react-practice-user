import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Productdetailspage from '../pages/Productdetailspage';
import Homepage from '../pages/Homepage';
import Loginpage from '../pages/Loginpage'
import Cartpage from '../pages/Cartpage';
import Contactpage from '../pages/Contactpage';



class Approute extends Component {
    render() {
        return (
       <>
       <Switch>
       <Route exact path="/" component={Homepage} />
       <Route exact path="/login" component={Loginpage} />
       <Route exact path="/productdetails" component={Productdetailspage} />
       <Route exact path="/cartpage" component={Cartpage} />
       <Route exact path="/contact" component={Contactpage} />
       </Switch>
       </>
        )
    }
}

export default Approute
