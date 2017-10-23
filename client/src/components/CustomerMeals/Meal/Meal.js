import React, {Component} from 'react';

class Meal extends Component {
    render() {
        const {title, description, date, image} = this.props;
        return (
            <section>
                <div className="col s12 m7">
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={image} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <span className="card-title">{title}</span>
                                <p>Meal Description: {description}</p>
                            </div>
                            <div className="card-action">
                                Date Sent: {date}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Meal;
