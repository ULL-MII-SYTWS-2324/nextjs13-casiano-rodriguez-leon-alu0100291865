import { NextResponse } from "next/server"; // https://nextjs.org/docs/app/api-reference/functions/next-response
import { url } from "@/app/app.config.js";

export const dynamic = 'force-dynamic' // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching

export async function GET() {
    console.log(url);

    let tickets = await fetch(url + "/tickets").then(r => r.json());
    return NextResponse.json(tickets, { status: 200 }); // https://nextjs.org/docs/app/api-reference/functions/next-response#json
}

/* 
You can use the next.revalidate option of fetch to set the revalidation period (in seconds) 
of an individual fetch request
*/

export async function POST(request) {
    let body = await request.json(); // request.json() see https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body
    let ticket = await fetch(url + "/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body) 
    }).then(r => r.json());
    return NextResponse.json(ticket, { status: 201 });
}