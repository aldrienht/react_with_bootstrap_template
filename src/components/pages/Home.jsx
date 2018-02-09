import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <NavigationLinks />
        <h1 className="mt-5">Home Page</h1>
      </div>
    );
  }
}

export default Home;
