
import { NextResponse } from 'next/server';
// import { Request } from 'express';
import { getSession } from '@/lib/cookiesConf'

export async function POST(req: Request) {
  const token = await getSession()
  const body = await req.json(); // Parse the incoming JSON body

  try {
    const response = await fetch('https://agua-p.vercel.app/adm/newArea', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify(body), // Use the parsed body
    });

    const data = await response.json();

    // You can log the response or data if needed
    // console.log(response);
    // console.log(data);

    return NextResponse.json(data); // Return the response from the other server
  } catch (error) {
    // Handle errors if the fetch or parsing fails
    console.error(error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
