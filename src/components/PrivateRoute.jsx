import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import EventService from "../services/EventService";

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            EventService.auth.isLogin() ? 
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;