import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';


class DisplayGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      response: {},
    };
  }

 componentDidUpdate(prevProps,prevState) {
     if(prevProps.valuef !== this.props.valuef && this.props.valuef!==undefined){
        this.setState({response: this.props.valuef})
     }
}
  render(){
      return(
        <Rstt data = {this.state.response}/>
      )
  }
}
function Rstt(props){
  if(Object.keys(props.data).length!==0 && props.data!==null){
    var result = props.data.data;
    return(
      <div className = ' d-flex justify-content-around'>
        <div className = 'col-sm-4 '>
        <table className = 'table table-dark table-bordered table-striped'>
          <caption>General Information</caption>
          <tbody>
            <tr>
              <td>City's Name</td>
              <td>{result.name}</td>
            </tr>
            <tr>
              <td>Latitude's</td>
              <td>{result.coord.lat}</td>
            </tr>
            <tr>
              <td>Longitude's</td>
              <td>{result.coord.lon}</td>
            </tr>
            <tr>
              <td>Sunrise</td>
              <td>{ new Date(result.sys.sunrise*1000).toLocaleString("en-US",{hour12:true,timeZoneName:'long'})}</td>
            </tr>
            <tr>
              <td>Sunset</td>
              <td>{new Date(result.sys.sunset*1000).toLocaleString("en-US",{hour12:true,timeZoneName:'long'})}</td>
            </tr>
          </tbody>
          </table>
        </div>
        <div className = 'col-sm-4 '>
        <table className = 'table table-dark table-bordered table-striped'>
          <caption>Weather Forecast</caption>
          <tbody>
            <tr>
              <td>Weather</td>
              <td>{result.weather[0].description}</td>
            </tr>
            <tr>
              <td>Temperature Right Now</td>
              <td>{result.main.temp}&#176;C</td>
            </tr>
            <tr>
              <td>Feel's Like</td>
              <td>{result.main.feels_like}&#176;C</td>
            </tr>
            <tr>
              <td>Maximum Temperature</td>
              <td>{result.main.temp_max}&#176;C</td>
            </tr>
            <tr>
              <td>Minimum Temperature</td>
              <td>{result.main.temp_min}&#176;C</td>
            </tr>
          </tbody>
          </table>
        </div>
        <div className = 'col-sm-4 '>
        <table className = 'table table-dark table-bordered table-striped'>
          <caption>Other Details</caption>
          <tbody>
            <tr>
              <td>Humidity</td>
              <td>{result.main.humidity}%</td>
            </tr>
            <tr>
              <td>Pressure</td>
              <td>{result.main.pressure} hPa</td>
            </tr>
            <tr>
              <td>Wind</td>
              <td>Speed : {result.wind.speed} Direction: {result.wind.deg}&#176;</td>
            </tr>
            <tr>
              <td>Cloudiness</td>
              <td>{result.clouds.all}%</td>
            </tr>
            </tbody>
            </table>
        </div>
      </div>
    )
  }else{
    return(
      <div></div>
       )
  }
}


export default DisplayGrid;