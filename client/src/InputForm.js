import React  from 'react';
import {useFormik} from 'formik';
import SelectSearch from 'react-select-search';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import './SelectSearch.css';
const DisplayGrid = React.lazy(()=> import('./DisplayGrid'));

class InputForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataJson: props.data,
    }
  }
  render(){
    return(
      <div>
      <LocationForm data = {this.state.dataJson}/>
      </div>
    )
  }
}
const LocationForm = (props) =>{
    const formik = useFormik({
        initialValues: {
          cities: props.data,
          city: '',
          metadata:{},
          Isempty:false

        },

        onSubmit: values => {
          Axios.get('http://localhost:3000/weather',{
            params: {
              city: formik.values.city,
            }
          })
    .then(res=>{
       formik.setValues({cities: props.data,
        city: formik.values.city,
        metadata:res
      })
    })
        },
      });
      const handleChanges = e =>{
        formik.setValues({city:e,cities:props.data})
      }
            return (
            <div className = 'Content-page'>
              <form onSubmit={formik.handleSubmit} className='form-row align-items-center FormDiv form-group'>
                <div className='col-auto  col-sm-6'>
                  <label className="mr-sm-2" htmlFor='city'>Choose your City</label>
                  <SelectSearch className="mr-sm-2 custom-select" options={formik.values.cities} search={true} name="city" onChange={handleChanges} value={formik.values.city} id='city'/>
                </div>
                <button className='btn btn-primary col-sm-2 find' type="submit">Find!!!</button>
              </form>
              <DisplayGrid valuef = {formik.values.metadata}/>
            </div>
        );
        }


export default InputForm;
