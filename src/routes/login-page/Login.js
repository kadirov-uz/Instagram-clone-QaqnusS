import React, {useState} from 'react';
import './Login.css';
import { auth } from '../../components/server/firebase';
import { useStateValue } from '../../context/stateprovider/StateProvider';

function Login() {
    const [{user}, dispatch] = useStateValue();
    const [ email, setEmail] =useState();
    const [ password, setPassword] =useState();
    const registerUser = (e) => {
        auth.createUserWithEmailAndPassword (email, password)
        .then(user => {
            if(user){
                dispatch({
                    type:"REGISTER_USER",
                    user: user.email
                })
            
            }
        })
        .catch(error => console.log(error));
        e.preventDefault();
        
    };
    
    const registerSignUser = (e) => {
        auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            if(user){
                dispatch({
                    type:"SIGN_IN_USER",
                    user: user.email
                })
            }
        })
        .catch(error => console.log(error));
        e.preventDefault(user);
    };
    return (
        <div className="login">
            <form>
                <input type="email" placeholder="Username or email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={registerUser}>Create user</button>
                <button onClick={registerSignUser}>Sing In</button>
            </form>
        </div>
    )
}

export default Login
