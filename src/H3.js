import React from 'react';
import countHoc from './CountHOC';
class H3 extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className='betterview'>
        <h3 onClick={this.props.inc}>Count:{this.props.cnt}</h3>
      </div>
    )
  }
}
export default countHoc(H3);