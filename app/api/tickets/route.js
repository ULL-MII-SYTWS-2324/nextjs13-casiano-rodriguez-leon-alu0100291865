import { NextResponse } from "next/server"; // https://nextjs.org/docs/app/api-reference/functions/next-response
import { url } from "@/app/app.config.js";

export const dynamic = 'force-dynamic' 

export async function GET() {
  console.log(url);
  
  let tickets = await fetch(url+"/tickets").then(r => r.json());
  return NextResponse.json(tickets, { status: 200 }); // https://nextjs.org/docs/app/api-reference/functions/next-response#json
}

/* 
You can use the next.revalidate option of fetch to set the revalidation period (in seconds) 
of an individual fetch request
*/