import { NextResponse } from 'next/server'

export async function GET (req) {
  const requestheader = new Headers(req.headers)
  //   console.log(requestheader)
  //   Url query params
  const { searchParams } = new URL(req.url)
  const cook1 = req.cookies
  console.log('Cookie', cook1)
  console.log(searchParams)
  return NextResponse.json({ msg: 'Hello Next.js API' })
}
