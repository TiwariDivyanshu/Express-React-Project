import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';


class DisplayGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      response: props.valuef,
      r2 : {}
    };
  }
 componentDidUpdate(prevProps,prevState) {
     if(prevProps.valuef !== this.props.valuef && this.props.valuef!==undefined)
        this.setState({response: this.props.valuef,r2:this.props.valuef.data.coord})
        
}
  render(){
      
      return(
    
          <div>{JSON.stringify(this.state.r2)}</div>
      )
  }
}
export default DisplayGrid;