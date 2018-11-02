import React, { Component } from 'react';

// import LifeCycle from './pages/demo/LifeCycle';


class App extends Component {
  render() {
    return (
      // <div className="content">
      <div>
        {/* <LifeCycle /> */}
        {this.props.children}
      </div>
    );
  }
}

export default App;
