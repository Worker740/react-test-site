import React from "react";
import { Outlet } from 'react-router-dom'


import Header from "./parts/Header.js";
import Footer from "./parts/Footer.js";
import SecondBlock from "./parts/SecondBlock";



class RouterLayout extends React.Component {


    render() {
        return (
            <main>
                <Header titleName='Title' />
                <Outlet />
                <Footer />
            </main>
        )
    }

}

export default RouterLayout