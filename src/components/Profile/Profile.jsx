import React, { useState,useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';


function Profile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { user, saveChanges, logout } = useContext(AuthContext)


    function handleSaveChanges(){
        if(name && email && password){
            if(saveChanges({name,email,password})){
              alert("Profile Successfully Updated ")
              navigate("/profile")
            }
          }else{
            alert("ALL FIELDS ARE REQUIRED!!")
          }
    }

    const handleLogout = () => {
        navigate("/login")
        alert("Logged Out!")
    }

  return (
    <>
    <div className="flex justify-center mt-20 px-8">
    <form className="max-w-2xl">
        <div className="flex flex-wrap border shadow rounded-lg p-3">
            <h2 className="text-xl text-gray-600 pb-2">Account settings:</h2>

            <div className="flex flex-col gap-2 w-full border-gray-400">

                <div>
                    <label className="text-gray-600 ">Full Name
                    </label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        type="name"
                        placeholder={user.name}
                        onChange={(e) => setName(e.target.value)}
                    > 
                    </input>
                </div>


                <div>
                    <label className="text-gray-600">Email</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        type="email"
                        placeholder={user.email}
                        onChange={(e)=> setEmail(e.target.value)}
                    >
                    </input>
                </div>

                <div>
                    <label className="text-gray-600 ">Password</label>
                    <input
                        className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                        placeholder={user.password}
                        onChange={(e)=> setPassword(e.target.value)}
                    >
                    </input>
                </div>
                
                <div className="flex justify-end">
                    
                    <button
                        className="py-1.5 px-3 m-1 text-center bg-orange-700 border rounded-md text-white  hover:bg-black/80 hover:text-gray-100 "
                        type="button"
                        onClick={handleLogout}
                    >
                    Log Out</button>
                    <button
                        className="py-1.5 px-3 m-1 text-center bg-orange-700 border rounded-md text-white  hover:bg-black/80 hover:text-gray-100 "
                        type="button"
                        onClick={handleSaveChanges}
                    >
                    Save changes</button>
                </div>
            </div>
        </div>
    </form>
    </div>
    </>
  )
}

export default Profile

