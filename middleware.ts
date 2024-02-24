import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest, respo:NextResponse) {
    if(request.nextUrl.pathname.startsWith('/inicial/')){
        const url = new URL(request.url)
        const searchParams = new URLSearchParams(url.searchParams)
        const idcompy = searchParams.get('id')
        const response = NextResponse.next()
        console.log('sparams',idcompy )
        response.cookies.set('idcompyn', 'idcompy')

        return NextResponse.next()
    }
}


// export const config = {
//     matcher: '/about/:path*',
//   }