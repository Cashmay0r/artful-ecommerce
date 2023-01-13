import Fastify from 'fastify';
import {IUser} from '../interfaces';
import {addUser, getUser} from './config/db';
import env from '@fastify/env';
declare module 'fastify' {
  interface FastifyInstance {
    config: {
      PORT: number;
      // this should be same as the confKey in options
      // specify your typing here
    };
  }
}
const fastify = Fastify({logger: true});

const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
  },
};

const options = {
  confKey: 'config',
  dotenv: true,
  schema: schema,
  data: process.env,
};

// Declare a route
fastify.get('/', async (request: any, reply: any) => {
  return {hello: 'world'};
});

fastify.post<{Body: IUser}>('/user/create', async (req, res) => {
  const user: IUser = req.body;
  try {
    await addUser(user);
    return res.status(200).send({message: 'Successfully created new user'});
  } catch (error) {
    return res.status(400).send(error);
  }
});

fastify.get('/user/:email', async (req, res) => {
  const params: any = req.params;

  try {
    const user = await getUser(params.email);
    return res.status(200).send({user});
  } catch (error) {
    return res.status(404).send({message: 'User not found'});
  }
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen({port: fastify.config.PORT, host: '0.0.0.0'});
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

fastify.register(env, options).ready((err) => {
  if (err) console.error(err);

  console.log(fastify.config); // or fastify[options.confKey]
  // output: { PORT: 3000 }
  start();
});
