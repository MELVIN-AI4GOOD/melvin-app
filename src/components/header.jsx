import React from "react";

import '../css/header.css';
import Logo from '../assets/melvin.png';

class Header extends React.Component {
    render() {
        return (
            <div className='header-div'>
                <h1 className='header-title'>MELVIN - AI4GOOD</h1>
            </div>
        );
    }
}

export default Header;