import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import TopMenu from '../components/shared/TopMenu'

const Layout = (props) => (
    <Container>
        <TopMenu />
        <Route {...props} />
    </Container>
)

export default Layout;