'use client'
import { useState } from 'react'

import ResturantLogin from '../_components/resturantLogin'
import ResturantSignup from '../_components/resturantSignup'

const Resturant = () => {
  const [login, setlogin] = useState(true)
  return (
    <>
      <div className='container'>
        <h1>Resturant Login/Signup Page</h1>
        {login ? <ResturantLogin /> : <ResturantSignup />}

        <div>
          <button className='button-link' onClick={() => setlogin(!login)}>
            {login
              ? 'Do not have account? Sign Up'
              : 'Already have an account?  Sign In'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Resturant
