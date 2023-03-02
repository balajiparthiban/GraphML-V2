import './style.scss'

const Login = (props) => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;

  return (
    <div className='login-page-wrapper'>
      <div className='login-content'>
        <h2>Welcome to GraphML</h2>
        {hasAccount ? <h3>Sign Up Now</h3> : <h3>Login Now</h3>}
        <div>
          <input
            type='text'
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <p className='errorMsg'>{emailError}</p>
        <div>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <p className='errorMsg'>{passwordError}</p>
        </div>
        <div className='btn-container'>
          {
            hasAccount ? (
              <>
                <button onClick={handleSignup}>Sign Up</button>
                <p>Already have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Login</span></p>
              </>
            ) : (
              <>
                <button onClick={handleLogin}>Login</button>
                <p>Don't have account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Login