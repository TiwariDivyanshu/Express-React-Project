import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React, {Suspense} from 'react';
import Axios from 'axios';
const Header = React.lazy(()=> import('./Header'));
const InputForm = React.lazy(()=> import('./InputForm'));

var citiesArray = new Array();
class App extends React.Component{

  componentDidMount(){
    Axios.get('http://localhost:3000/cities')
    .then(res=>{
      var responseArray = (res.data.cities);
      responseArray.forEach(element =>{
        citiesArray.push({
          name: element,
          value : element 
        })
      })
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
          <InputForm data = {citiesArray}/>
        </Suspense>
      </div>
    )
  }
}

export default App;
