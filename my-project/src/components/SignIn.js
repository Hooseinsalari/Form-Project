import React, {useState} from 'react';

const SignIn = () => {

    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccept: false
    })

    const changHandler = (event) => {
        if(event.target.name === "isAccept"){
            setData({...data, [event.target.name]: event.target.checked})
        } else{
            setData({...data, [event.target.name]: event.target.value})
        }
        console.log(data)
    }

    return (
        <div>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={data.name} onChange={changHandler} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" value={data.email} onChange={changHandler} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={data.password} onChange={changHandler} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={changHandler} />
                </div>
                <div>
                    <label>I accept privacy of policy</label>
                    <input type="checkbox" name="isAccept" value={data.isAccept} onChange={changHandler} />
                </div>
            </form>
        </div>
    );
};

export default SignIn;