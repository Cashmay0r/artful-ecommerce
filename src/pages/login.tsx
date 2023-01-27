import {signIn} from 'next-auth/react';
import React, {useRef} from 'react';

export default function login() {
  return (
    <button onClick={() => signIn('google')} className='rounded-md hover:bg-gray-100 transition-colors duration-200 bg-white border border-gray-200 px-3 py-2 whitespace-nowrap'>
      Sign in with Google
    </button>
  );
}
