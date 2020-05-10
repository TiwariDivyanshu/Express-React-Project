import 'bootstrap/dist/css/bootstrap.css';
import React, {Suspense} from 'react';
import Axios from 'axios';
import './App.css';
const Header = React.lazy(()=> import('./Header'));
const LocationForm = React.lazy(()=> import('./LocationForm'));

class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  componentDidMount(){
    Axios.get('http://localhost:3000/cities')
    .then(res=>{
      console.log(res);
    })
  }
  render(){
    return(
      <div>
        <Suspense fallback={
        <div className='d-flex justify-content-center'>
          <div className='spinner-border px-md-n5' role='status'>
            <span className ='sr-only'></span>
          </div>
        </div>}>
          <Header/>
          <LocationForm data = {[{ name: 'Swedish', value: 'sv' },
                { name: 'English', value: 'en' }]}/>
        </Suspense>
      </div>
    )
  }
}

export default App;
