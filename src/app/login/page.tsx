"use client"   // now this become a client component

import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { NextResponse } from "next/server"
import axios from "axios"
import toast from "react-hot-toast"

export default function LoginPage(){
    const router = useRouter()
    const [user, setUser] = useState({
        email : "",
        password : ""
    })
    const [buttonDisabled , setButtonDisabled] = useState(false)
    const [loading , setLoading] = useState(false)

    const onLogin = async () => {
         try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user)
            console.log("Loged in Successfully!")
            toast.success('Login Success')
            router.push("/profile")
         } catch (error : any) {
            return NextResponse.json({
                message : error.message,
            } , {status : 400})
         }finally{
            setLoading(false)
         }
    }

    useEffect(() => {
         if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false)
         }else{
            setButtonDisabled(true)
         }
    } , [user])
    return(
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-white text-2xl m-4">{loading? "Loading..." : "Login"}</h1>
            <hr />
             <label htmlFor="email">E-Mail</label>
            <input 
             className="p-3 m-1 rounded-lg text-black"
             id="email"
             type="text"
             value={user.email}
             onChange={(e) => setUser({...user , email : e.target.value})}
             placeholder="email..."
             />
             <label htmlFor="password">Password</label>
            <input 
             className="p-3 m-1 rounded-lg text-black"
             id="password"
             type="password"
             value={user.password}
             onChange={(e) => setUser({...user , password : e.target.value})}
             placeholder="password..."
             />
             <button type="submit" onClick={onLogin} className="bg-gray-500 mt-4 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
             {buttonDisabled ? "No Login" : "Login"}
            </button>

            
            <Link href="/signup" className="text-white mt-4">Sign-up Page</Link>

        </div>
    )
}