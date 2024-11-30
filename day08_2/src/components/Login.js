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
</table>
<button>Login</button>
</>
);
}