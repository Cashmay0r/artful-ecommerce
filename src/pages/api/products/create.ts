import {NextApiRequest, NextApiResponse} from 'next';
import prisma from '../lib/prismadb';

export interface ProductsData {
  product?: Product[];
  error?: string | undefined;
}

interface Product {
  id: number;
  name: string;
  description: string;
}

const dummyProduct = {
  id: 1,
  name: 'Boots',
  description: 'Super stable running boots for extra special people',
};

export default async function CreateProduct(req: NextApiRequest, res: NextApiResponse<ProductsData>) {
  if (req.method === 'POST') {
    const {amount_purchased, description, image_uri, name, total_stock} = req.body;
    console.log(amount_purchased, description, image_uri, name, total_stock);
    try {
      const response = await prisma.product.create({
        data: {
          amount_purchased: amount_purchased,
          description: description,
          image_uri: image_uri,
          name: name,
          total_stock: total_stock,
        },
      });

      console.log(response);
    } catch (err) {
      console.log(err);
      return res.status(400).json({error: 'Unable to create product'});
    }

    return res.status(200).json({product: [dummyProduct]});
  } else {
    return res.status(400).json({error: 'Incorrect HTTP Method'});
  }
}
