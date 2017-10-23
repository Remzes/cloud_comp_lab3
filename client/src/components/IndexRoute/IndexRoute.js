import React, {Component} from 'react';

class IndexRoute extends Component {
    constructor(){
        super();
    }

    render(){
        return (
          <section>
              <h2>Welcome</h2>
              <p>
                  Download our menu:
                  <a href="https://storage.googleapis.com/restaraunt_web_menu/Menu.pdf" download>Menu</a>
              </p>
          </section>
        );
    }
}

export default IndexRoute;