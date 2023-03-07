import {GetServerSideProps, NextPageContext} from 'next';
import {ProductsData} from './api/products/create';

interface Props {
  products: ProductsData;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products: ProductsData = await fetch('http://localhost:3000/api/products/create').then((res) => res.json());
  return {
    props: {products}, // will be passed to the page component as props
  };
};

export default function Home(props: Props) {
  const createProduct = async () => {
    const product = {
      amount_purchased: 0,
      description: 'This is an awesome product',
      image_uri: 'https://www.google.com.au',
      name: 'Boots wehaw',
      total_stock: 15,
    };

    const res = await fetch('http://localhost:3000/api/products/create', {method: 'POST', body: JSON.stringify(product), headers: {'Content-Type': 'application/json'}});
  };

  return (
    <div>
      <button onClick={createProduct}>Create product</button>
      <div className='w-full h-36 bg-orange-100'>Featured Section</div>
      <div className='h-72'>Recently Viewed</div>
      <div>Discover new sellers/Sellers to try</div>
      <div>Broader categories</div>
    </div>
  );
}
