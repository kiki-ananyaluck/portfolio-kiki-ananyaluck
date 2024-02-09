
import React from 'react';
import Nav from './component/Nav';
import Footer from './component/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;