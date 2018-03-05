import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'; 


// Views
import Home  from './Home';
import Login from './Login';
import Dashboard from './Dashboard';


export default () => (
    <Fragment>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="/dashboards" component={Dashboard} />
        </Switch>
    </Fragment>
)

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         Auth.isLoggedIn() ?
//         ( <Component {...props}/> ) :
//         ( <Redirect to={{
//             pathname: '/login',
//             state: { from: props.location }
//         }}/> )
//     )}/>
// )