import { PrismaClient } from "@prisma/client";

/* The prismaClient instance, created using the Prisma client
 library, is used to interact with a database in a Node.js
  application. Prisma is an Object-Relational Mapping (ORM)
   tool that simplifies database access by providing a
    type-safe and auto-generated query builder. */

const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
