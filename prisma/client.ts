import { PrismaClient } from '@prisma/client';

declare global { 
    namespace NodeJS {
        interface Global {}
    }
}
// Add prisma to the  NODEJS global type
interface CustomNodeJSGlobal extends NodeJS.Global{
    prisma: PrismaClient
}
// Prevent multiple instances of Prisma Client in development
declare const global: CustomNodeJSGlobal

// Initialize Prisma client
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma;
