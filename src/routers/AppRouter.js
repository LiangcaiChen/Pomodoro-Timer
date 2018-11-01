import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HeaderPage from '../components/HeaderPage';
import TimerPage from '../components/TimerPage';
import SettingPage from '../components/SettingPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderPage />
            <Switch>
                <Route path="/" component={TimerPage} exact={true}/>
                <Route path="/setting" component={SettingPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;