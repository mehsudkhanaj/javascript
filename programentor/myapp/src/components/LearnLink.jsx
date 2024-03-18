import Link from 'next/link'
const LearnLink = () => {
    const id=2;
    // const id="Jamshed";
  return (
    <div>
        <Link href='/admin/dashboard'>Go to Admin Dashboard</Link>
        <br />
        <Link href={`/user/profile/${id}`}>Go to User Profile</Link>
    </div>
  )
}

export default LearnLink