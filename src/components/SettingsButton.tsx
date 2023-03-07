'use client';
import React from 'react';
import {Menu, Transition} from '@headlessui/react';
import {Fragment, useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser, faRightFromBracket, faGear} from '@fortawesome/free-solid-svg-icons';
import {signOut} from 'next-auth/react';
import Link from 'next/link';

import {redirect} from 'next/navigation';

export default function SettingsButton() {
  const signout = () => {
    signOut();
    redirect('/');
  };

  return (
    <div className=' w-fit'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex items-center w-8 aspect-square p-1 justify-center border border-gray-200 hover:bg-gray-100 text-black  px-4 py-2 text-sm font-medium rounded'>
            <FontAwesomeIcon icon={faGear} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 mt-2 w-fit origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({active}) => (
                  <Link className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'} whitespace-nowrap group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`} href={'/profile'}>
                    <FontAwesomeIcon icon={faUser} />
                    Profile
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <button onClick={signout} className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'} whitespace-nowrap group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Sign Out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props: any) {
  return (
    <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 13V16H7L16 7L13 4L4 13Z' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  );
}

function EditActiveIcon(props: any) {
  return (
    <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 13V16H7L16 7L13 4L4 13Z' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
    </svg>
  );
}

function DuplicateInactiveIcon(props: any) {
  return (
    <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 4H12V12H4V4Z' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
      <path d='M8 8H16V16H8V8Z' fill='#EDE9FE' stroke='#A78BFA' strokeWidth='2' />
    </svg>
  );
}

function DuplicateActiveIcon(props: any) {
  return (
    <svg {...props} viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M4 4H12V12H4V4Z' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
      <path d='M8 8H16V16H8V8Z' fill='#8B5CF6' stroke='#C4B5FD' strokeWidth='2' />
    </svg>
  );
}
