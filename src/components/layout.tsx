import React, {ReactNode} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {signIn, signOut, useSession} from 'next-auth/react';

export default function Layout({children}: {children: ReactNode}) {
  const {data: session} = useSession();
  return (
    <div className='flex flex-col justify-start items-center min-h-screen text-gray-700'>
      <div className='w-full h-14 bg-white shadow-sm flex flex-row justify-between items-center px-5 border-b'>
        <div>
          <h1 className='text-lg font-medium'>Artiful</h1>
        </div>
        {session ? (
          <div className='flex flex-row gap-5 justify-start items-center'>
            <p>{session.user?.name}</p>
            <button onClick={() => signOut()} className='bg-primary border border-gray-200 w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200 cursor-pointer rounded-md shadow-sm'>
              <FontAwesomeIcon icon={faRightFromBracket} className='' />
            </button>
          </div>
        ) : (
          <button onClick={() => signIn()} className=' w-fit px-3 shadow-md  outline  py-1 flex items-center justify-center hover:bg-cyan-800 transition-colors duration-200 cursor-pointer rounded-md'>
            Login
          </button>
        )}
      </div>
      <div className='grow h-full  w-full'>{children}</div>
    </div>
  );
}
