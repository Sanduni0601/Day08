import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login(){
const navigate = useNavigate();
const [user,setUser] = useState({username:"", password:"",error:""})
const getTextInput = (e) =>{
    const {name,value} = e.target;
    setUser((prevUser)=>({
        ...prevUser,[name]:value,
    }))
}

const authenticate = () =>{
    if(user.username === "admin" && user.password === "abc@123"){
        setUser({username:"",password:"",error:""})
        navigate('/dash');
    } else {
        setUser({'error':"Invalid credentials"})
    }
}
return(
<>
<h1>Login here</h1>
<table>
    <tr>
        <td>Username: </td>
        <td><input type = "text" name = "username" onChange={getTextInput}/></td>
    </tr>
    <tr>
        <td>Password: </td>
        <td><input type = "password" name = "password" onChange={getTextInput}/></td>
    </tr>
    <tr>
    <td style={{ color: 'red' }} colSpan={2}>{user.error}</td>
    </tr>
</table>
<button onClick={authenticate}>Login</button>
</>
);
}