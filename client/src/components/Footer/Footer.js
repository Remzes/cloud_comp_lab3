import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer  orange lighten-1">
            <section className="container">
                <section className="row">
                    <section className="col l6 s12">
                        <h5 className="white-text">Footer Content</h5>
                        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </section>
                    <section className="col l4 offset-l2 s12">
                        <h5 className="white-text">Links</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </section>
                </section>
            </section>
            <section className="footer-copyright">
                <section className="container">
                    © 2014 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </section>
            </section>
        </footer>
    );
};

export default Footer;