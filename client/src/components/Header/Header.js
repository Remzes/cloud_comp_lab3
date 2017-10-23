import React from 'react';
import {withRouter, Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar-fixed">
            <nav>
                <section className="nav-wrapper">
                    <Link className="brand-logo" to="/">Logo</Link>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <Link to="/add_new_order">Add New Order</Link>
                        </li>
                        <li><Link to="/customer_meals">Customer Meals</Link></li>
                    </ul>
                </section>
            </nav>
        </header>
    );
};

export default Header;