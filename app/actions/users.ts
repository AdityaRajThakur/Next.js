"use server"
import prisma from "@/db";

export async function signup(username: string, password: string) {
  console.log(username);
  try {
    await prisma.user.create({
      data: {
        username,
        password
      }
    })
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
