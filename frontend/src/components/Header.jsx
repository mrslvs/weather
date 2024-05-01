import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
// import '../assets/styles/index.scss';

const Header = () => {
    const { selection, setSelection } = useState('login');

    return (
        <header>
            <nav className="custom-navbar">
                <IoMdMenu className="menu-icon" />
                <div className="menu-dropdown">
                    <button className="btn btn-outline-primary mr-2">Login</button>
                    <button className="btn btn-outline-primary">Register</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
