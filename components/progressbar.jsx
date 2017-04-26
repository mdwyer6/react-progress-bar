import React from 'react';
import PropTypes from 'prop-types';

let percent = null;

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.toPercent = this.toPercent.bind(this);
  }

  validate() {
    const themes = {
      "default": 1,
      "winter": 1,
      "cyber": 1,
      "spartan": 1
    }

    let isValid = true;
    
    //Validation will stop after first error is found and logged
    if (this.props.percent && (this.props.min || this.props.max || this.props.current)) {
      isValid = false;
      console.log('The ProgressBar component can take a percent value or a min, max, and current value. It cannot accept both.');
    } else if (!this.props.percent && !(this.props.min || this.props.max || this.props.current)) {
      isValid = false;
      console.log('You must provide either a percent value or a min, max and current value.');
    } else {
      if (this.props.theme) {
        if (!themes[this.props.theme]) {
          isValid = false;
          console.log(`${this.props.theme} is not a valid theme.`);
        }
      }
      if (this.props.percent) {
        if (typeof this.props.percent !== 'number') {
          isValid = false;
          console.log('The value passed to the percent prop must be a number.');
        } else if (this.props.percent > 100 || this.props.percent < 0) {
          isValid = false;
          console.log('The value passed to the percent prop mus be between 0 and 100 (inclusive)');
        }
      } else {
        if (typeof this.props.min !== 'number' || typeof this.props.max !== 'number' || typeof this.props.current !== 'number') {
          isValid = false;
          console.log('The props min, max and current must all be numbers');
        } else if ((Math.max(this.props.max, this.props.min) <= this.props.current) || (Math.min(this.props.max, this.props.min) >= this.props.current)) {
          isValid = false;
          console.log('The value passed to the current prop must be between the min and max props values (inclusive)');
        }
      }
    }

    return isValid;
  }

  toPercent(min, max, current) {
    
    //Min > max when user wants progress to increase as current decreases e.g., time remaining
    if (min < max) {
      return ((current - min) / (max - min)) * 100;
    } else {
      return ((min - current) / (min - max)) * 100;
    }
  }

  render() {
    if (this.validate()) {
      let percent = Math.round(this.toPercent(this.props.min, this.props.max, this.props.current)) || Math.round(this.props.percent);
      return (
        <div className={`progress-bar-container ${'default' || this.props.theme}`}>
            <div className="progress-bar-inner" style={{width: `${percent}%`}}>{percent}%</div>
        </div>
      );
    } else {
      null;
    }
  }
}

ProgressBar.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  current: PropTypes.number,
  percent: PropTypes.number,
  theme: PropTypes.string
}

export default ProgressBar;