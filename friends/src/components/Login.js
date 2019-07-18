import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";



function Login ({touched, errors}){


    return(
        <Form>
            <div>
                <label>Username</label>

                <Field 
                name='username'
                type='text'
                autocomplete='off' />

                <h3>{touched.username && errors.username}</h3>
            </div>

            <div>
                <label>Password</label>

                <Field 
                name='password'
                type='password'
                autocomplete='off' />

                <h3>{touched.password && errors.password}</h3>
            </div>

            <button>Login</button>

        </Form>
    )
}


export default withFormik({

    mapPropsToValues(){
        return{
            username: '',
            password: ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
        .max(20, 'Username must be under 20 characters')
        .required('Username Required'),

        password: Yup.string()
        .min(8, 'Password must be under 20 characters')
        .required('Username Required')
    })

})(Login)