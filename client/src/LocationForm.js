import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

import {useFormik} from 'formik';
const LocationForm = () =>{
    const formik = useFormik({
        initialValues: {
            city: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values,null,2));
        },
    });
    return(
        <form onSubmit = {formik.handleSubmit} className = 'form-row align-items-center FormDiv border border-info rounded-sm p5-4 shadow-lg form-group'>
            <div className = 'col-auto  col-sm-6'>
            <label className = "mr-sm-2" htmlFor = 'city'>Choose your City</label>
            <select
            className = "custom-select mr-sm-2"
            id = 'city'
            name = 'city'
            type = 'select'
            onChange = {formik.handleChange}
            value = {formik.values.city}
            >
                <option value = "delhi">Delhi</option>
                <option value = "Mumbai">Mumbai</option>
            </select>
            </div>
            <button className = 'btn btn-primary col-sm-2'type = "submit">Find!!!</button>
        </form>
    );
};

export default LocationForm;