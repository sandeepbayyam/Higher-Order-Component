import React from "react";
import "./style.css";
import Button from './Button';
import H1 from './H1';
import H3 from './H3.js'
class App extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="betterview">
        <h1>Hello StackBlitz!</h1>
        <Button></Button>
        <H1></H1>
        <H3></H3>
      </div>
    );
  }  
}

export default App;