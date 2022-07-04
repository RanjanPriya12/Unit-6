import { Input } from "antd";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from "../Redux/Auth/actions";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Login(){
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })
    const token = useSelector((store) => store.authStore.auth_token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {id,value} = e.target;
        console.log(id,value);
        setFormData({
            ...formData,[id]:value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/login",formData)
        .then(response => {
            console.log(response);
            const {data,status} = response;
            const todo_auth ={ isAuth:true,auth_token:data.token }
            if(status === 200){
                dispatch(login(data.token));
                localStorage.setItem("todo-auth",JSON.stringify(todo_auth));
                navigate("/");
            }
        });
    }

   
    
    return <div>
        <form onSubmit={handleSubmit}>
            <Input placeholder="Enter email" id='email' onChange={handleChange}/>
            <Input placeholder="Enter password" type="password" id='password'onChange={handleChange} />
            <Input type="Submit" value="Login" />
        </form>
    </div>
}

export default Login;