import AuthContext from '@/AuthContext';
import LoginButton from '@/components/LoginButton';
import SettingsButton from '@/components/SettingsButton';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {getServerSession} from 'next-auth';

import '../styles/globals.css';

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang='en'>
      <body>
        <AuthContext>
          <div className='flex flex-col justify-start items-center min-h-screen text-gray-700'>
            <div className='w-full h-14 bg-white shadow-sm flex flex-row justify-between items-center px-5 border-b'>
              <div>
                <h1 className='text-lg font-medium'>Artiful</h1>
              </div>
              {session ? (
                <div className='flex flex-row gap-5 justify-start items-center'>
                  <p className='text-sm font-medium'>{session?.user?.email}</p>
                  <SettingsButton />
                </div>
              ) : (
                <LoginButton />
              )}
            </div>
            <div className='grow w-full'>{children}</div>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
