import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption.js'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase/compat/app'
import { useSelector } from "react-redux"
import { selectUser } from './features/counter/userSlice'

export default function Feed() {
    const {user} = useSelector(selectUser)
    const [input, setInput] = useState('')
    const [post, setPost] = useState([])
    useEffect(()=>{
        db.collection('post').orderBy('timestamp', 'desc').onSnapshot((snapshot)=>
        setPost(
            snapshot.docs.map((doc) => ({
                id : doc.id,
                data : doc.data(),

            }))
            ))
    },[])
    
    const sendPost = (e) => {
        e.preventDefault()
        db.collection('post').add({
            name : user.displayName,
            description : user.email,
            message : input,
            photoUrl : user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    } 

  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>

            </div>
            <div className='feed__inputOptions' >
                <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
                
            </div>
        </div>
            {post.map(({id,data:{name, description, message, photoUrl}}) =>(
                <Post
                key={id}
                name = {name}
                description={description}
                message ={message}
                photoUrl={photoUrl}
                />

            ))}

    </div>
  )
}
