import React, { Component } from "react";
import { Route } from "react-router-dom";

//import components
import Home from "./Home";
import Contact from "./Contact";
import Nav from "./Nav";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";

//import history object
import history from "./History";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false
    };
  }

  /*method to show/hide the mobile menu */
  showMobileMenu = () => {
    this.state.mobileMenu
      ? this.setState({
          mobileMenu: false
        })
      : this.setState({ mobileMenu: true });
  };

  /*method to hide the mobile menu and go to new route */
  mobileRedirect = route => {
    this.setState({
      mobileMenu: false
    });
    history.push(`/${route}`);
  };

  render() {
    const { mobileMenu } = this.state;

    return (
      <div className="app-container">
        <Nav mobileMenu={mobileMenu} showMobileMenu={this.showMobileMenu} />
        {mobileMenu === true ? (
          <MobileMenu mobileRedirect={this.mobileRedirect} />
        ) : (
          <div className="component-container">
            <Route
              exact
              path="/"
              render={() => {
                return <Home />;
              }}
            />
            <Route
              exact
              path="/people"
              render={() => {
                return <Home />;
              }}
            />
            <Route
              exact
              path="/contact"
              render={() => {
                return <Contact />;
              }}
            />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
