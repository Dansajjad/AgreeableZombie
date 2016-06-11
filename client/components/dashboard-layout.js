import React, { PropTypes, Component } from 'react';
import StartClass from './StartClass';

class DashboardLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      signup : false
    };
  }

  render() {
    return (
      <div className="Dashboard">
        <StartClass room='A'/>
        <StartClass room='B'/>
      </div>
    );
  }
};

export default DashboardLayout;
