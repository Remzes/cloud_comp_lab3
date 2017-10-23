import React from 'react';
import Meal from './Meal/Meal';
import NewMeal from './NewMeal/NewMeal';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import Loader from '../Loader/Loader';

class CustomerMeals extends React.Component {

    componentDidMount(){
        this.props.getMeals();
    }

    render() {
        if (this.props.meals.fetched){
            const {data} = this.props.meals;
            console.log(data);
            return (
                <section>
                    <h3>Customer Meals</h3>
                    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Add New Meal</a>
                    {
                        data.data.map((meal, index) => {
                            return (
                                <Meal
                                    key={index}
                                    date={meal.MEAL_DATE_SENT || "No"}
                                    title={meal.MEAL_TITLE}
                                    image={meal.MEAL_IMAGE}
                                    description={meal.MEAL_DESCRIPTION}
                                />
                            )
                        })
                    }
                    <NewMeal/>
                </section>
            )
        }

        return <Loader/>
    }
}

export default connect(({meals}) => ({meals}), actions)(CustomerMeals);