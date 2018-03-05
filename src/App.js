import React from 'react';
import { HashRouter as Router, Switch } from "react-router-dom";


import RootRoutes from './views/_routes';

const App = () => (
    <React.Fragment>
        <Router>
            <Switch>
                <RootRoutes />
            </Switch>
        </Router>
    </React.Fragment>
    
)

export default App;