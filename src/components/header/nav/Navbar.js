import React from 'react';
import { 
    NavItem,
    NavLink,
    NavMenu
} from './NavStyling';

const Navbar = () => {
    return (
        <NavMenu role="navigaton">
            <NavItem>
                <NavLink 
                    to="/"
                    aria-label="Employees">   
                    Employees
                </NavLink>
            </NavItem>
        </NavMenu>
    );
}

export default Navbar;
