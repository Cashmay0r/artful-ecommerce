import React from 'react';

export default function RegisterForm() {
  return (
    <form>
      <h1>Register</h1>
      <div>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
      </div>
      <button className='bg-white border border-gray-100 px-3 py-2'>Register</button>
    </form>
  );
}
