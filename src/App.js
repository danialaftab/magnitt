import React from 'react';
import MainLayout from './layouts/mainLayout'
import Home from './pages/Home'
import UserProfile from './pages/UserProfile'
import OrganizationProfile from './pages/OrganizationProfile'
import Messages from './pages/Messages'
import Connections from './pages/Connections'

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
          <MainLayout path="/user/:id" component={UserProfile} />
          <MainLayout path="/organization/:id" component={OrganizationProfile} />
          <MainLayout path="/messages" component={Messages} />
          <MainLayout path="/connections" component={Connections} />
          <MainLayout path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
