import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

  async function main() {
    const data = await prisma.user.aggregate({
      _count: {
        email: true,
      }
    });

    console.log(data)
    console.log('The number of created user is:' + data);
    console.log('The number of created user is:' + aggregate._count.email);



  }

  main();
