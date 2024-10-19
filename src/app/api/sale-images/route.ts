// src/app/api/images-sale/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    const apiKey = process.env.API_KEY;
    const apiSecret = process.env.API_SECRET;
    const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDNAME}/resources/search/images-sale`;

    
    const res = await fetch(url, {
        headers:{
            Authorization: `Basic ${Buffer.from(`${apiKey}:${apiSecret}`).toString('base64')}`,
        },
        cache: 'no-store'
    })

    const data = await res.json();
    const images = data.resources;

    return NextResponse.json(images);
}
