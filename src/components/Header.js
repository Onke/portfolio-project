import React from 'react'
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Onke Sipuka</h1>
                <Typed 
                className="typed-text" 
                strings={["Web Design", "Web Development", "Software Engineer", "Google Ads"]}
                typeSpeed={40}
                backSpeed={60} 
                loop
                />

                <a href="#" className="btn-main-offer" >Contact me</a>
            </div>
        </div>
    )
}

export default Header
