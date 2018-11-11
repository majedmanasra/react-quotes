import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {PATH_DASHBOARD, PATH_FAVORITES} from "./utils/paths";
import AuthenticatedLayout from "./layout/AuthenticatedLayout";
import Favorites from "./pages/Favorites";

class AppRouter extends Component {
    static defaultProps = {};
    static propTypes = {};

    state = {};

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path={PATH_DASHBOARD}>
                        <AuthenticatedLayout>
                            <Dashboard/>
                        </AuthenticatedLayout>
                    </Route>
                    <Route exact path={PATH_FAVORITES}>
                        <AuthenticatedLayout>
                            <Favorites/>
                        </AuthenticatedLayout>
                    </Route>
                    <Route>
                        <div>page not found</div>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default AppRouter;
