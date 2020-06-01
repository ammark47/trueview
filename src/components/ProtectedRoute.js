import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { signIn } from '../Auth0'

export const ProtectedRoute = ({ children, callback, ...rest }) => {
    const user = useSelector(state => state.authReducer.user)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user || callback ? (
                    children 
                    ) : (
                    <Redirect
                        to={"/"}
                    />
                )
            }
        />
    );
}
