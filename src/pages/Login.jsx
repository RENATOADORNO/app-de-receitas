import React from 'react';
import LoginForm from '../components/LoginForm';

function Login() {
  return (
    <main className="section section__login" id="loginPageMain">
      <div className="login__container " id="loginFormContainer">
        <h1 className="section__title title__login">Login</h1>
        <LoginForm />
      </div>
    </main>
  );
}

export default Login;
