import { useRef } from "react"


function Login() {

  const usernameRef = useRef()
  const passwordRef = useRef()

  return (
    <div>
      <br /> <br />
      <label>Username</label><br />
      <input ref={usernameRef} type="text" /><br />
      <label>Password</label><br />
      <input ref={passwordRef} type="password" /><br /><br />
      <button>Login</button>
    </div>
  )
}

export default Login