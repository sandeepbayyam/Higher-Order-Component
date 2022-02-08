import React from 'react'

export default function CountHOC(OldComponent){
  class NewComponent extends React.Component{
    constructor(){
      super();
      this.state={
        count:100
      }
    }
    inc = ()=>{
      this.setState({count:this.state.count+1})
    }
    render(){
      return(
        <OldComponent cnt={this.state.count} inc={this.inc} />
      )
    }
  }
  return NewComponent;
}