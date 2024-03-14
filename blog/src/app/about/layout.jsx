import Link from 'next/link'
const layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/login/loginstudent'>Student Login</Link>
        </li>
        <li>
          <Link href='/login/loginteacher'>Teacher Login</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}

export default layout
