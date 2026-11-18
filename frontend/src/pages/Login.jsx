import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem("isLoggedIn", "true");
      // Reset the form after the simulated request.
      setEmail("");
      setPassword("");
      setError("");
      navigate("/");
    } catch (err) {
      setError("Failed to create user");
    }
  };
  return (
    <>
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleLogin}>

<img className='w-[100px] h-[60px] self-center mb-3' src="https://pngimg.com/uploads/pinterest/pinterest_PNG62.png" alt="" />
<h3 className='text-center text-2xl font-[500] mb-5'>Login</h3>
    
        <div className="inputBox2 mt-3">
          <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
        </div>
        
        <div className="inputBox2 mt-3">
          <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </div>

        <p className='text-[13px] text-red-500'>{error}</p>
<p className='my-2'>Don't have an account? <a href="/signup" className='text-blue-500 hover:underline'>Sign up</a></p>
<button className='bg-[#e60023] text-[#fff] p-2 mt-1 rounded-[30px] '>Login</button>
      </form>
    </div>
    </>
  )
}
export default Login