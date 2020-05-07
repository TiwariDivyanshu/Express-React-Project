import 'bootstrap/dist/css/bootstrap.css';
import React, {Suspense} from 'react';
import './App.css';
const Header = React.lazy(()=>
import('./Header'));

class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Header/>
          <div>This includes a header and it is a import example</div>
        </Suspense>
      </div>
    )
  }
}

export default App;
