import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login(){
const navigate = useNavigate();


return(
<>
<h1>Login here</h1>
<table>
    <tr>
        <td>Username: </td>
        <td><input type = "text" name = "username"/></td>
    </tr>
    <tr>
        <td>Password: </td>
        <td><input type = "password" name = "password"/></td>
    </tr>
</table>
<button>Login</button>
</>
);
}