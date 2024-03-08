import axios from "axios";
//import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import prisma from "@/db";
//const prisma = new PrismaClient();

async function getData() {
  try {
    const res = await prisma.user.findFirst({});
    return {
      username: res?.username,
      email: res?.username
    }
  } catch (e) {
    console.log("error");
    return {
      Message: "Signin Error"
    }
  }
}
export default async function Home() {
  const data = await getData();
  return (
    <div className="flex flex-col  justify-center h-screen">
      <div className="flex justify-center ">
        <div className="border p-8 rounded">
          <div>
            Name: {data?.username}
          </div>

          Email: {data?.email}
        </div>
      </div>
    </div>
  );
}
