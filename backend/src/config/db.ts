import {PrismaClient} from '@prisma/client';
import {IUser} from '../../interfaces';

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
}

export async function addUser(user: IUser) {
  await prisma.user.create({
    data: {email: user.email, date_created: new Date(), first_name: user.first_name, last_name: user.last_name},
  });
}

export async function getUser(email: string) {
  return await prisma.user.findFirst({where: {email: email}});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
