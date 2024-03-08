import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  const res = await prisma.user.findFirst({});
  return Response.json({
    "username": res?.username,
    "email": res?.username

  });
}

export async function POST(req: NextRequest) {
  const res = await req.json();
  const ans = await prisma.user.create({
    data: {
      username: res.username,
      password: res.password
    }
  })
  console.log(res);
  return Response.json({
    message: "Message sent successfully"
  })
}
