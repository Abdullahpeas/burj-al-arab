import React, { useContext } from 'react';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {  signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Your email" />
                <input type="password" name="" id="" placeholder="Your password" />
            </form>
            <button onClick={signInUsingGoogle}>Google signIn</button>
        </div>
    );
};

export default Login;