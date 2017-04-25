import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: null
    };
  }

  render() {
    return 
    (<div className={`progress-bar-container ${'default' || this.props.theme}`}>
      <div className="progress-bar-inner"> </div>
    </div>);
  }
}