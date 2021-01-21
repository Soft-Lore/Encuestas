import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, LogIn, SingUp, MySurveys, Surveys, ViewSurveys } from '../pages/index'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route  exact path="/home" component={ Home } />
                <Route  exact path="/login" component={ LogIn } />
                <Route  exact path="/singup" component={ SingUp } />
                <Route  exact path="/mysurveys" component={ MySurveys } />
                <Route  exact path="/surveys" component={ Surveys } />
                <Route  exact path="/viewsurvey" component={ ViewSurveys } />
                <Route component={ () => <h1>Error 404</h1> } />
            </Switch>
        </Router>
    )
}

export default Routes