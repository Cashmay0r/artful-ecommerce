import React from 'react';

import {PrismaClient, Product} from '@prisma/client';
import axios from 'axios';

import prisma from '../../api/lib/prismadb';
import Link from 'next/link';
import {redirect} from 'next/navigation';

export default async function Products() {
  /* const session = await getServerSession(authOptions); */

  /* if (!session) {
    console.log('No user signed in');
    console.log(session);
    redirect('/');
  } */

  const getProducts = async () => {
    try {
      return await prisma.product.findMany();
    } catch (error) {
      console.error('Unable to fetch products');
      return null;
    }
  };

  const products = await getProducts();

  /*  const {data: session, status} = useSession();
  const [productData, setProductData] = useState(products); */

  /*  const createDummyProduct = async () => {
    const body = {description: 'Some cool boots', image_uri: '', name: 'Boots', total_stock: 10};
    try {
      const {data} = await axios.post('/api/product', body, {headers: {Authorization: `Bearer ${session?.accessToken}`}});
      console.log('Created Product => ', data);
      await refreshProducts();
    } catch (err) {
      console.error(err);
    }
  }; */

  /*  const refreshProducts = async () => {
    try {
      const {data} = await axios.get<Product[]>('/api/product', {headers: {Authorization: `Bearer ${session?.accessToken}`}});
      console.log('Got Products => ', data);
    } catch (err) {
      console.error(err);
    }
  }; */
  return (
    <div className='p-5'>
      <div>
        <h1>Create a Product</h1>
        <Link href='/profile/products/create' className='bg-black text-white rounded-md hover:bg-slate-700 px-3 py-2'>
          Create
        </Link>
      </div>
      <h1>All Products</h1>

      <ul>
        {products?.map((product) => {
          return (
            <li className='border px-2 py-1 font-semibold' key={product.id}>
              {product.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
