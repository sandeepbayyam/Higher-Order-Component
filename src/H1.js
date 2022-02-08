import React from 'react';
import CountHOC from './CountHOC';
class H1 extends React.Component {
  render() {
    return (
      <div className="betterview">
        <h1 onClick={this.props.inc}>Count:{this.props.cnt}</h1>
      </div>
    );
  }
}
export default CountHOC(H1);
