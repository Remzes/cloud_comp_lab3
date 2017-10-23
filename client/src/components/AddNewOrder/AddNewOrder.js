import React, {Component} from 'react';
import $ from 'jquery';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import Loader from '../Loader/Loader';

class AddNewOrder extends Component {
    constructor() {
        super();
        this.state = {
            isRemember: "",
            sent: ""
        }
    }

    submitOrder(e) {
        e.preventDefault();
        axios.post("/api/new_order",
            {
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val(),
                city: $("#city").val(),
                postal_code: $("#postal_code").val(),
                phone_number: $("#phone").val(),
                province: $("#province").val(),
                food: $("#food_select").val(),
                delivery: $("input[name='group1']:checked").val(),
                comments: $("#comments").val(),
                order_date: Date.now()
            })
            .then(() => {
                this.setState({
                    sent: "Your order has been sent",
                    isRemember: ""
                });
                console.log("Province", $("#province").val());
                console.log("Food", $("#food_select").val());

                $("#user_err").addClass("green-text").html("Your order has been sent");
                $("#first_name").val("");
                $("#last_name").val("");
                $("#city").val("");
                $("#postal_code").val("");
                $("#phone").val("");
                $("#comments").val("");
                $("#province").val(1);
                $("#food_select").val(1);
                $("#province").material_select();
                $("#food_select").material_select();
            });
    };

    rememberUser(e) {
        e.preventDefault();
        axios.post("/api/check_user",
            {
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val()
            })
            .then((response) => {
                if (response.data === "N") {
                    this.setState({
                        isRemember: "We can't find your last order",
                        sent: ""
                    });
                    $("#user_err")
                        .removeClass("green-text")
                        .addClass("red-text")
                        .html("Sorry, we have not found you :(");
                } else {
                    this.setState({
                        isRemember: "We found your last order",
                        sent: ""
                    });
                    let obj = response.data[0];
                    $("#user_err")
                        .removeClass("red-text")
                        .addClass("green-text")
                        .html("We found your last order :)");
                    $("#first_name").val(obj.user_f_name);
                    $("#last_name").val(obj.user_l_name);
                    $("#city").val(obj.city);
                    $("#postal_code").val(obj.postal_code);
                    $("#phone").val(obj.phone_number);
                    $("#province").val(obj.province);
                    $("#food_select").val(obj.combo_id);
                    if (obj.delivery === "T") {
                        $("#pickup").click();
                    } else {
                        $("#delivery").click();
                    }
                    $("#comments").val(obj.comments);

                    $("#province").material_select();
                    $("#food_select").material_select();
                }
            })
    };

    componentDidMount() {
        $('select').material_select();
    }

    componentDidUpdate() {
        $('select').material_select();
    }

    render() {
        if (this.props.provinces.fetched && this.props.combos.fetched) {
            const provinces = this.props.provinces.data;
            const combos = this.props.combos.data;
            console.log(this.props.provinces.data.data);
            return (
                <section className="add_new_order">
                    <h4 className="center">{this.state.isRemember}</h4>
                    <h4 className="center">{this.state.sent}</h4>
                    <form className="col s12">

                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text"/>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text"/>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s6">
                                <input id="city" type="text"/>
                                <label htmlFor="disabled">City</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="postal_code" type="text"/>
                                <label htmlFor="password">Postal Code</label>
                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s6">
                                <input id="phone" type="text"/>
                                <label htmlFor="disabled">Phone Number</label>
                            </div>
                            <div className="input-field col s6">
                                <select id="province" className="province_select">
                                    <option value="1" disabled={true} selected={true}>Choose your option</option>
                                    {
                                        provinces.data.map(province => {
                                            return <option key={province.provinces_shortcut}
                                                           value={province.provinces_name}>{province.provinces_name}</option>
                                        })
                                    }
                                </select>
                                <label>Province</label>
                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s7">
                                <select multiple="" id="food_select">
                                    <option value="1" disabled={true} selected={true}>Choose your option</option>
                                    {
                                        combos.data.map(combo => {
                                            return <option key={combo.COMBO_NAME} value={combo.COMBO_ID}
                                                           data-icon="https://storage.googleapis.com/restaraunt_web_images/pizza-icon.png">{combo.COMBO_NAME}</option>
                                        })
                                    }
                                </select>
                                <label>Food and Drinks</label>
                            </div>
                            <div className="col s5">
                                <p className="col s6">
                                    <input id="pickup" name="group1" type="radio" value="F" className="with-gap"/>
                                    <label htmlFor="pickup">Pickup</label>
                                </p>
                                <p className="col s6">
                                    <input id="delivery" name="group1" type="radio" value="T" className="with-gap"/>
                                    <label htmlFor="delivery">Delivery</label>
                                </p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="comments" className="materialize-textarea"></textarea>
                                <label htmlFor="comments">Order Comments</label>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col s3">
                                <button id="submit_order" className="btn" onClick={(e) => this.submitOrder(e)}>Submit
                                    Order
                                </button>
                            </div>
                            <div className="col s3">
                                <button id="remember_button" className="btn" onClick={(e) => this.rememberUser(e)}>
                                    Remember Me?
                                </button>
                            </div>
                        </div>


                    </form>
                </section>
            )
        }

        return <Loader/>
    }
}

export default connect(({combos, provinces}) => ({combos, provinces}), actions)(AddNewOrder);