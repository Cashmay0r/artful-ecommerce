import React from 'react';

export default function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </div>
    </div>
  );
}
