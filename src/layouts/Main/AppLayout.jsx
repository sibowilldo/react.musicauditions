import React from 'react'
import Navigation from "../Header/Navigation.jsx";

const Layout = ({children}) =>{
    return(
            <>
                <Navigation></Navigation>
                <main>{children}</main>
            </>
    )
}

export  default  Layout;