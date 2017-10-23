import React, {Component} from 'react';
import AddNewOrder from './AddNewOrder/AddNewOrder';
import CustomerMeals from './CustomerMeals/CustomerMeals';
import '../assets/Styles/App.css';
import * as actions from '../actions';
import {connect} from 'react-redux';
import waterfall from 'async/waterfall';

import {Route, BrowserRouter} from 'react-router-dom';
import IndexRoute from "./IndexRoute/IndexRoute";
import Header from './Header/Header';
import Footer from './Footer/Footer';

class App extends Component {
    componentDidMount() {
        this.props.getCombos();
        setTimeout(() => {
            this.props.getProvinces();
        }, 1500);
    }

    render() {
        return (
            <BrowserRouter>
                <section className="content" id="container">
                    <Header/>
                    <main>
                        <Route exact path="/" component={IndexRoute}/>
                        <Route exact path="/add_new_order" component={AddNewOrder}/>
                        <Route exact path="/customer_meals" component={CustomerMeals}/>
                    </main>
                    <Footer/>
                </section>
            </BrowserRouter>
        )
    }
}

export default connect(null, actions)(App);