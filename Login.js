import { login } from './features/counter/userSlice'
import React, { useState } from 'react'
import { useDispatch } from "react-redux" 
import { auth } from './firebase'
import './Login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispach = useDispatch()
    const loginToApp = (e) => {
        e.preventDefault()

        try {
            const userAuth = auth.signInWithEmailAndPassword(email, password);
      
            dispach(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
              })
            );
          } catch (error) {
            alert(error);
          }

    }
    const register = () => {
        if(!name){
            return alert('Please enter a full name ')
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName : name,
                photoURL : profilePic,
            })
            .then(() =>{
                dispach(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                        })
                )

            })
        }).catch((error)=> alert(error.message))

    }
  return (
    <div className='login'>
        <img 
         src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
         alt="Linkedin main logo"
        />
        <form>
            <input
                placeholder="Full name (required for register)"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Profile pic URL (optional)"
                type="text"
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
            />

            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" onClick={loginToApp}>
                Sign In
            </button>
        </form>
        <p>
        Not a member?{" "}
            <span className="login__register" onClick={register}>
            Register Now
            </span>
      </p>

    </div>
  )
}

export default Login