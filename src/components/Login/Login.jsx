import React, {useState,useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const { login, error } = useContext(AuthContext)

  function handleLogin (e){
    if(login({email,password})){
      navigate("/profile")
    }else{
      alert("User not found")
    }
  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl ">Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <NavLink
                to="/sign-up"
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </NavLink>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">

                {/* Email */}
                <div>
                  <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {setEmail(e.target.value)}}
                      required
                    ></input>
                  </div>
                </div>

                {/*Password */}
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                    <NavLink
                      to=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {' '}
                      Forgot password?{' '}
                    </NavLink>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      onChange={(e) => {setPassword(e.target.value)}}
                      required
                    ></input>
                  </div>
                </div>
                
                {/* Login Button */}
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-orange-700 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={handleLogin}
                  >
                    Login 
                  </button>
                </div>
                

              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default Login