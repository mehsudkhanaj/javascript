const ResturantLogin = () => {
  return (
    <>
      <h2>Login Component</h2>
      <div>
        <div className='input-wrapper'>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Enter user Email'
            className='input-field'
          />
        </div>
        <div className='input-wrapper'>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter password'
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
export default ResturantLogin
