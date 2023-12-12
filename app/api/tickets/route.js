import { NextResponse } from "next/server"; // https://nextjs.org/docs/app/api-reference/functions/next-response
import { url } from "@/app/app.config.js";

export async function GET() {
  console.log(url);
  
  let tickets = await fetch(url+"/tickets", { 
    cache: "no-cache", // Also `cache: 'no-store'`  https://nextjs.org/docs/app/building-your-application/caching#fetch-optionscache
    next: { revalidate: 3600 } // https://nextjs.org/docs/app/building-your-application/caching#fetch-optionsnextrevalidate
  }).then(r => r.json());
  return NextResponse.json(tickets, { status: 200 }); // https://nextjs.org/docs/app/api-reference/functions/next-response#json
}