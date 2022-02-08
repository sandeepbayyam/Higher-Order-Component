import React from 'react';
import CountHOC from './CountHOC';
class Button extends React.Component {
  render() {
    return (
      <div className="betterview">
        <button onClick={this.props.inc}>Count:{this.props.cnt}</button>
      </div>
    );
  }
}
export default CountHOC(Button);
