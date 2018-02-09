import React, { Component } from 'react';
import NavigationLinks from "../navigation_links";

class About extends Component {
  render() {
    return (
      <div className="About">
        <NavigationLinks />
        <h1 className="mt-5">About Page</h1>
      </div>
    );
  }
}

export default About;
