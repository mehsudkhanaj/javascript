const ResturantSignup = () => {
  return (
    <>
      <h2>Signup Component</h2>
      <div>
        <div className='input-wrapper'>
          <input
            type='text'
            name='username'
            placeholder='Enter User Email'
            className='input-field'
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='password'
            name='password'
            placeholder='Enter Password'
            className='input-field'
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='password'
            name='confirmpassword'
            placeholder='Confirm Password'
            className='input-field'
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='password'
            name='confirmpassword'
            placeholder='Enter Resturant Name'
            className='input-field'
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='password'
            name='confirmpassword'
            placeholder='Enter City'
            className='input-field'
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='password'
            name='confirmpassword'
            placeholder='Enter Full Address'
            className='input-field'
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='password'
            name='confirmpassword'
            placeholder='Enter Contact No'
            className='input-field'
          />
        </div>

        <div className='input-wrapper'>
          <button className='input-field'>Login</button>
        </div>
      </div>
    </>
  )
}
export default ResturantSignup
