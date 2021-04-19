import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="/images/linkedin.png" alt="the logo"/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right"></div>
        </div>
    )
}

export default Header
