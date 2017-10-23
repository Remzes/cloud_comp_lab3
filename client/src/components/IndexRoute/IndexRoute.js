import React, {Component} from 'react';

class IndexRoute extends Component {
    constructor(){
        super();
    }

    render(){
        return (
          <section className="landing_page">
              <h2>Welcome</h2>
              <h3>This is a website of Pizza Restaurant</h3>
              <p>
                  Download our menu:
                  <a className="btn btn-floating download_btn btn-large orange waves-effect waves-light" href="https://storage.googleapis.com/restaraunt_web_menu/Menu.pdf" download>
                      <i className="material-icons">business_center</i>
                  </a>
              </p>
          </section>
        );
    }
}

export default IndexRoute;