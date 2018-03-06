import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import DashboardHeader from "../components/Header";

import OverviewDashboard from "./Dashboard/OverviewDashboard";
import DetalhesDashboard from './Dashboard/DetalhesDashboard';
import NovaDashboard from './Dashboard/NovaDashboard';

import NovoDashboardItem from './Dashboard/DashboardItem/NovoDashboardItem';

class Dashboard extends Component {
    state = {  }
    render() {
        return (
            <Fragment>
                <DashboardHeader />
                <Switch>
                    <Route exact path="/dashboards" component={OverviewDashboard} />
                    <Route exact path="/dashboards/:id/detalhes" component={DetalhesDashboard} />
                    <Route exact path="/dashboards/nova" component={NovaDashboard} />
                    <Route exact path="/dashboards/:id/adicionar/item" component={NovoDashboardItem} />
                </Switch>
            </Fragment>
        );
    }
}

export default Dashboard;