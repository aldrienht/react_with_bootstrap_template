import React, { Component } from 'react';
import './App.css';
import AppRoutes from "./router/routes";

class App extends Component {
  render() {
    return (
      <div>
        <AppRoutes />
      </div>
    );
  }
}

export default App;
