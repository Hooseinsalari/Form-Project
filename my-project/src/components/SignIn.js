import React, {useState, useEffect} from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { validData } from './validData';
import { notify } from './toastify';

const SignIn = () => {

    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccept: false
    })

    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})

    useEffect(() => {
        setErrors(validData(data))
        console.log(errors)
    },[data, touched])

    const changHandler = (event) => {
        if(event.target.name === "isAccept"){
            setData({...data, [event.target.name]: event.target.checked})
        } else{
            setData({...data, [event.target.name]: event.target.value})
        }
        
    }

    const focusHandler = (event) => {
        setTouched({...touched, [event.target.name]: true})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            notify("Your Sign up is Successfuly", "success")
        } else {
            notify("Invalid data!", 'error')
            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccept: true
            })
        }
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <h2>Sign up</h2>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={data.name} onChange={changHandler} onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" value={data.email} onChange={changHandler} onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={data.password} onChange={changHandler} onFocus={focusHandler} />
                    {errors.password  && touched.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changHandler} onFocus={focusHandler} />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>I accept privacy of policy</label>
                    <input type="checkbox" name="isAccept" value={data.isAccept} onChange={changHandler} onFocus={focusHandler} />
                    {errors.isAccept && touched.isAccept && <span>{errors.isAccept}</span>}
                </div>
                <div>
                    {/* <a href="#">Login</a> */}
                    <button type="submit">Sign up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignIn;