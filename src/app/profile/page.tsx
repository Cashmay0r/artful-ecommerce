import Link from 'next/link';
import React from 'react';

export default function Profile() {
  return (
    <div className='flex flex-col justify-start items-start gap-3 p-3'>
      <h1>Profile page</h1>
      <Link href={'/profile/products'} className='px-4 py-2 bg-gray-900 text-gray-100 rounded-md hover:bg-gray-700'>
        Products
      </Link>
    </div>
  );
}
