import React from 'react';
import {useFormik} from 'formik';
import SelectSearch from 'react-select-search';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import './SelectSearch.css';


const LocationForm = (props) =>{
    const formik = useFormik({
        initialValues: {
          cities: props.data,
         city: ''
        },
        onSubmit: values => {
          alert("you have selected"+formik.values.city);
        },
      });
      const handleDiff = e =>{
        formik.setValues({city:e,cities:props.data})
      }
            return (<form onSubmit={formik.handleSubmit} className='form-row align-items-center FormDiv border border-info rounded-sm p5-4 shadow-lg form-group'>
            <div className='col-auto  col-sm-6'>
                <label className="mr-sm-2" htmlFor='city'>Choose your City</label>
                <SelectSearch className="mr-sm-2 custom-select" options={formik.values.cities} search={true} name="city" onChange={handleDiff} value={formik.values.city} id='city' />
            </div>
            <button className='btn btn-primary col-sm-2 find' type="submit">Find!!!</button>
        </form>);
        }

        
export default LocationForm;
