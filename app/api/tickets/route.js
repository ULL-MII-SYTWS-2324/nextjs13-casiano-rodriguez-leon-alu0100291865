import { NextResponse } from "next/server"; // https://nextjs.org/docs/app/api-reference/functions/next-response
import { url } from "@/app/app.config.js";

export async function GET() {
  console.log(url);
  
  let tickets = await fetch(url+"/tickets").then(r => r.json());
  return new NextResponse.json(tickets, { status: 200 }); // https://nextjs.org/docs/app/api-reference/functions/next-response#json
}