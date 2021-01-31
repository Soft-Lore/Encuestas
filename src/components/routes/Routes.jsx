import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, LogIn, SingUp, Surveys, ViewSurveys, Footer, Error, Profile } from '../pages/index'
import ProtectedRoutes from '../../ProtectedRoute'
import Cookies from 'universal-cookie'
import Provider from '../tokenProvider'

const cookie = new Cookies()

const Routes = () => {
    const [token, setToken] = useState()
    const [auth, setAuth] = useState(cookie.get('auth'));
    
    useEffect(() => {
        //Desencriptar token
        const parseJwt = (token) => {
            let base64Url = token.split('.')[1];
            let base64 = base64Url.replace('-', '+').replace('_', '/')
            return JSON.parse(window.atob(base64));
        }
        const data = cookie.get('auth');

        data && (
            setToken(parseJwt(data))
        )
    }, [])

    const toggleLogIn = () => {
        setAuth(cookie.get('auth'))
    }

    return(
        <Router>
            <Switch>
                <Provider value={token}>
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
                    <Route component={ Error } />
                </Provider>
            </Switch>
            <Footer />
        </Router>
    )
}

export default Routes
