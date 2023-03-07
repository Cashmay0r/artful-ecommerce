'use client';

import {signIn} from 'next-auth/react';
import React from 'react';

export default function LoginButton() {
  return (
    <button onClick={() => signIn('google')} className='px-3 bg-primary border border-gray-200 w-fit h-10 flex items-center py-1 justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded shadow-sm'>
      Login
    </button>
  );
}
