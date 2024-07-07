"use client"   // now this become a client component

import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage(){
    const [user, setUser] = useState({
        email : "",
        password : ""
    })

    const onLogin = async () => {

    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-white text-2xl m-4">Login</h1>
            <hr />
             <label htmlFor="email">E-Mail</label>
            <input 
             className="p-3 m-1 rounded-lg"
             id="email"
             type="text"
             value={user.email}
             onChange={(e) => setUser({...user , email : e.target.value})}
             placeholder="email..."
             />
             <label htmlFor="username">Password</label>
            <input 
             className="p-3 m-1 rounded-lg"
             id="password"
             type="password"
             value={user.email}
             onChange={(e) => setUser({...user , password : e.target.value})}
             placeholder="password..."
             />
             <button type="submit" onClick={onLogin} className="bg-gray-500 mt-4 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
             Sign-up
            </button>

            
            <Link href="/signup" className="text-white mt-4">Sign-up Page</Link>

        </div>
    )
}