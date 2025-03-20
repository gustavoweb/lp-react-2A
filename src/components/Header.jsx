import React from 'react';
import './Header.css';

function Header(){
    return(
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li><a href="#">CS 2</a></li>
                        <li><a href="#">Skins</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
export default Header;