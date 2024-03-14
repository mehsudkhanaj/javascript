'use client'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <h1>Hello Testing</h1>
      <p>This is a sample home page.</p>
      <Link href="/about">Go to About Page</Link>
      <br />
      <Link href='/services'>Go to Service Page</Link>
      <br />
      <Link href='/login'>Go to Login Page</Link>
      <Link href='/login/loginstudent/'>Go to student Page</Link>
    </main>
  );
}
