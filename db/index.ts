import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  // console.log("generate client");
  return new PrismaClient()
}
//console.log("inside db/index.ts");
declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
