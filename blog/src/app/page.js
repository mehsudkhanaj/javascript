'use client'
import Link from 'next/link';
import {useRouter} from 'next/navigation'
export default function Home() {
  const navigate=(name)=>{
    router.push(name)
  }
  const router = useRouter();
  
  return (
    <main >
      {/* <h1>Home Page</h1>
      <Link href='/login'> Go to Login Page</Link>
      <br />
      <Link href='/about'> Go to About Page</Link>
      <br />
      <Link href='/login'> Go to Login Page</Link>
      <br />
      <br />
      <button onClick={()=>navigate('/login')}>Go to Login Page</button>
      <button onClick={()=>navigate('/about')}>Go to About Page</button>
      <button onClick={()=>navigate('/about/aboutstudent')}>Go to About Student</button> */}
      {/* <h1>Fetch Data with API Client Component</h1> */}
      {/* <Link href='/productlist'>Go to Product List</Link> */}
      {/* <Link href='/plist'>Go to  Second product List</Link> /*/}
      <h1>Next Js</h1>

    </main>
  );
}

