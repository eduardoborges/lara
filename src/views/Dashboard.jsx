import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import DashboardHeader from "../components/Header";

import Overview from "./Dashboard/Overview";
import Detalhes from './Dashboard/Detalhes';
import Nova from './Dashboard/Nova';
import NovoItem from './Dashboard/NovoItem';

class Dashboard extends Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <DashboardHeader />
                <Switch>
                    <Route exact path="/dashboards" component={Overview} />
                    <Route exact path="/dashboards/:id/detalhes" component={Detalhes} />
                    <Route exact path="/dashboards/nova" component={Nova} />
                    <Route exact path="/dashboards/:id/adicionar/item" component={NovoItem} />
                </Switch>
            </Fragment>
        );
    }
}

export default Dashboard;