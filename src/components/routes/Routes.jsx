import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, LogIn, SingUp, MySurveys, Surveys, ViewSurveys, Footer, Error, Profile } from '../pages/index'
import ProtectedRoutes from '../../ProtectedRoute'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

const Routes = () => {
    const [auth, setAuth] = useState(cookie.get('auth'));

    const toggleLogIn = () => {
        setAuth(cookie.get('auth'))
    }

    return(
        <Router>
            <Switch>
                <Route 
                    exact
                    path="/login"
                    handle={ toggleLogIn }
                    render={ props => <LogIn { ...props }
                    handle={ toggleLogIn }/> } 
                />
                <Route 
                    exact
                    path="/singup" 
                    handle={ toggleLogIn } 
                    render={ props => <SingUp { ...props } handle={ toggleLogIn } /> } 
                />
                <ProtectedRoutes 
                    exact 
                    path="/" 
                    component={ Home } 
                    isAuth={auth}
                />
                <ProtectedRoutes 
                    exact 
                    path="/profile" 
                    component={ Profile }
                    isAuth={auth}
                />
                <ProtectedRoutes 
                    exact 
                    path="/viewsurvey" 
                    component={ ViewSurveys } 
                    isAuth={auth}
                />
                <ProtectedRoutes 
                    exact 
                    path="/surveys" 
                    component={ Surveys } 
                    isAuth={auth}
                />
                <ProtectedRoutes 
                    exact 
                    path="/mysurveys" 
                    component={ MySurveys } 
                    isAuth={auth}
                />
                <Route component={ Error } />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes
