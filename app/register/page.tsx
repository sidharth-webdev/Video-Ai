
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


  return (
    <div>
      register
    </div>
  )
}

export default RegisterPage; 
