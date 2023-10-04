import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
        <Nav>
            <Bars />

            <NavMenu>
                <NavLink to='/floien' activeStyle>
                    Fløien
                </NavLink>
                <NavLink to='/kikut' activeStyle>
                    Kikut
                </NavLink>
                <NavLink to='/hardangerjokulen' activeStyle>
                    Hardangerjøkulen
                </NavLink>
                <NavLink to='/ulrikken' activeStyle>
                    Ulrikken
                </NavLink>
                <NavLink to='/lyderhorn' activeStyle>
                    Lyderhorn
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    );
};

export default Navbar;