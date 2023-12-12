import { NextResponse } from "next/server"; // https://nextjs.org/docs/app/api-reference/functions/next-response
import { url } from "@/app/app.config.js";

export const dynamic = 'force-dynamic' // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#opting-out-of-data-caching

export async function GET(_, { params }) {
    try {
        let id = params.id;
        let res = await fetch(url + "/tickets/" + id)
        if (!res.ok) {
            return NextResponse.json(
                { error: `Can not find ticket ${id}`}, 
                { status: res.status});
        }
        let ticket = await res.json();
        return NextResponse.json(ticket, { status: 200 }); // https://nextjs.org/docs/app/api-reference/functions/next-response#json
    } catch (error) {
        return NextResponse.error(error, { status: 500 }); // 500 Internal Server Error
    }
}

/* 
You can use the next.revalidate option of fetch to set the revalidation period (in seconds) 
of an individual fetch request
*/