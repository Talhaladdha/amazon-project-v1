import React, {useState} from 'react';
import { Link , useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)  => {
                //it successfully user sign in with Email and Pwd
              if(auth){
                  history.push('/')
              }
            })
            .catch(error => alert(error.message))
    }

    const register  = e => {
        e.preventDefault();
        
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)  => {
                //it successfully created a new user with Email and Pwd
              if(auth){
                  history.push('/')
              }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to = "/">
            <img className="login--logo" src="logo.png" alt="amazon"/>
            </Link>
            <div className='login--container'>
                <h1>Sign-In</h1>
                <form>
                    <h6>E-mail or Phone Number</h6>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}  />
                    <h6>Password</h6>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={signIn} className='login--signin'>Sign In</button>
                </form>
                <p>
               <h6> By continuing, you agree to Amazon's Conditions of Use and Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</h6>
               <h7>-------------New to Amazon ? -------------</h7>
                </p>
                <button type='submit' onClick={register} className='login--create'>Create your Amazon Account</button>
            </div>
        </div>
    )
}
export default Login