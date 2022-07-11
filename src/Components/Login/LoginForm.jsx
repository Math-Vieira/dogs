import React from 'react';
import { Link } from 'react-router-dom';
import style from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <section>
        <h1>Login</h1>
        <Link to="/login/criar">Criar Conta</Link>
    </section>
  )
};

export default LoginForm;