
"use client"
import { useRouter } from 'next/navigation';
import React, {useState} from 'react';

const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
  
    const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(password !== confirmPassword){
        alert("password do not match");
        return;
      }
    }

    try {
    const res =  await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
      })
     const data =  await res.json(); 

     if(!res.ok){
      throw new Error(data.error || "Registration Failed");
     }

     console.log(data);
     router.push("/login")

    } catch (error) {
      console.error(error);  
    }
 

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSumit}>
        <input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
        type="password"
        placeholder='Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        </form> 
    </div>
  )
}

export default RegisterPage; 
