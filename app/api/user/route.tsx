import { NextResponse } from "next/server";
//import { PrismaClient } from "@prisma/client";
import prisma from '@/db/index';
// const prisma = new PrismaClient();
export async function POST(res: NextResponse) {
  const body = await res.json();
  console.log(body.username);
  try {
    await prisma.user.create({
      data: {
        username: body.username,
        password: body.password
      }
    })
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      Message: 'Failed to create user successfully'
    })
  }
  return Response.json({
    Message: "created successfully"
  })
} 
