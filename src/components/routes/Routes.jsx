import React, { useState } from 'react'
import ProtectedRoutes from '../../ProtectedRoute'
import Cookies from 'universal-cookie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, LogIn, SingUp, Surveys, ViewSurveys, Footer, Pagina404, Profile, MySurvey } from '../pages/index'

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
                <Route 
                    exact 
                    path="/viewsurvey/:_id" 
                    component={ auth ? ViewSurveys : Pagina404 } 
                />
                <Route 
                    exact 
                    path="/mysurvey/:id" 
                    component={ auth ? MySurvey : Pagina404 } 
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
                    path="/surveys" 
                    component={ Surveys } 
                    isAuth={auth}
                />
                <Route component={ Pagina404 } />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes
