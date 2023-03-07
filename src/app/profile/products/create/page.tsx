'use client';
import React from 'react';
import {useFormik} from 'formik';

export default function Create() {
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      amount: 0,
      file: null,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='p-3 grow w-full'>
      <h1>Create a new Product.</h1>
      <form className='inline-flex w-full gap-5' onSubmit={formik.handleSubmit}>
        <div className='w-56 grow aspect-square border-2 flex justify-center items-center text-sm'>
          <input
            id='file'
            type='file'
            accept='image/*'
            name='file'
            onChange={(e) => {
              if (e.currentTarget.files) {
                formik.setFieldValue('file', e.currentTarget.files[0]);
              }
            }}
          />
        </div>
        <div className='w-1/2 border-2 grow p-5 flex flex-col justify-start items-start gap-3 '>
          <div className='max-w-sm w-full'>
            <div className='flex justify-center items-start flex-col '>
              <label htmlFor='productName' className='text-sm font-medium'>
                Product Name
              </label>
              <input
                placeholder={'Enter product name'}
                onChange={formik.handleChange}
                value={formik.values.name}
                type='text'
                id='productName'
                name='name'
                className='w-full focus:outline-none px-4 py-2 border-2 border-gray-200 text-sm rounded-md'
              />
            </div>
            <div className='flex justify-center items-start flex-col'>
              <label htmlFor='productDescription' className='text-sm font-medium'>
                Product Description
              </label>
              <textarea
                placeholder={'Enter product name'}
                onChange={formik.handleChange}
                value={formik.values.description}
                rows={4}
                id='productDescription'
                name='description'
                className='w-full focus:outline-none px-4 py-2 border-2 border-gray-200 text-sm rounded-md'
              />
            </div>
            <div className='flex justify-center items-start flex-col'>
              <label htmlFor='productAmount' className='text-sm font-medium'>
                Amount
              </label>
              <input onChange={formik.handleChange} value={formik.values.amount} type='number' id='productAmount' name='amount' className='w-full focus:outline-none pl-4 py-2 pr-1 border-2 border-gray-200 text-sm rounded-md' />
            </div>
          </div>

          <div>
            <button type='submit' className='px-4 py-2 rounded-md bg-orange-100 text-orange-900 hover:bg-orange-200 text-sm'>
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
