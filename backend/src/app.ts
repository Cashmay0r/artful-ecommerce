import Fastify from 'fastify';
import {IUser} from '../interfaces';
import {addUser, getUser} from './config/db';
import {send} from 'process';

const fastify = Fastify({logger: true});
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
    await fastify.listen({port: 3000, host: '0.0.0.0'});
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
