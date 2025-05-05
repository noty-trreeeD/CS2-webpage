import React, {useState} from 'react';
import cs2logo from '../images/cs2logoSvg.svg';
import '../styles/Header.css'
import {Link} from "react-router-dom";


export const Header = () => {
    return (
        <div className="header">
            <Link to='/' id='logo'><img className='logo' src={cs2logo} alt="CS2 Logo" /></Link>
            <Link to='/'>Main</Link>
            <Link to='/cases'>Cases</Link>
            <button className='header-btn'>Click me!</button>
        </div>
    );
};