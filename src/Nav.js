import React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
    render() {
        return (
            <nav>
                <Link className="link" to="/">
                    <h3>Logo</h3>
                </Link>
                <ul className="nav-links">
                    <Link className="link" to="/about">
                        <li>About</li>
                    </Link>
                    <Link className="link" to="/shop">
                        <li>Shop</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}