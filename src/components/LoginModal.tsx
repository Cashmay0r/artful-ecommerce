'use client';
import React from 'react';
import {Dialog, Transition} from '@headlessui/react';
import {Fragment, useState} from 'react';
import {signIn} from 'next-auth/react';

interface ILoginModal {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginModal({isOpen, setIsOpen}: ILoginModal) {
  function closeModal() {
    setIsOpen(false);
  }

  function loginWithGoogle() {
    signIn('google');
  }

  function loginWithEmail() {
    signIn('email', {email: 'aidanenseleit98@gmail.com'});
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='gap-3 w-full max-w-xs transform overflow-hidden rounded-2xl bg-white p-6  shadow-xl transition-all flex flex-col justify-center items-start'>
                  <Dialog.Title as='h3' className='font-medium leading-6 text-gray-900 text-base'>
                    Welcome Back
                  </Dialog.Title>
                  <Dialog.Description as='p' className='text-sm opacity-60'>
                    Please Login to continue.
                  </Dialog.Description>

                  {/*  <div className='w-full text-start'>
                    <label htmlFor='emailInput'>Email</label>
                    <input type='email' className='w-full px-4 py-2 border border-gray rounded-md text-sm' name='emailInput' id='emailInput' />
                    <button onClick={loginWithEmail} className='px-4 py-2  rounded-md w-full bg-orange-100 text-orange-900 hover:bg-orange-200' type='button'>
                      Login with email
                    </button>
                  </div> */}
                  <div className='w-full'>
                    <button onClick={loginWithGoogle} className='px-4 py-2  rounded-md w-full bg-gray-900 text-gray-100 hover:bg-gray-700' type='button'>
                      Login With Google
                    </button>
                  </div>
                  <div className='w-full'>
                    <button onClick={closeModal} type='button' className='px-4 py-2 rounded-md w-full bg-white text-gray-900 hover:bg-gray-100'>
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
