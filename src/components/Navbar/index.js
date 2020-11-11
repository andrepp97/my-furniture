import React from 'react';
import {
    Search,
    Person,
    ShoppingCart,
    MenuOpen,
    Close,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import './Navbar.css';

const Navbar = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <div className="navbar-container">
            
            <span>LOGO</span>

            <ul className={open ? "nav-menu active" : "nav-menu"}>
                <li>Home</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <div className="icons">
                <IconButton>
                    <Search />
                </IconButton>
                <IconButton>
                    <Person />
                </IconButton>
                <IconButton className="keranjang">
                    <ShoppingCart />
                    <span className="keranjang-text">3</span>
                </IconButton>
            </div>

            <IconButton
                size="small"
                className="hamburger"
                onClick={() => setOpen(!open)}
            >
                {open ? <Close /> : <MenuOpen />}
            </IconButton>

        </div>
    );
};

export default Navbar;