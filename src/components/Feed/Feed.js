import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import  SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import  EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon  from '@material-ui/icons/CalendarViewDay'
import InputOption from './InputOption/InputOption'
import Post from './Post/Post'

function Feed() {
    const [posts,setPosts]=useState([])
    const sendPost = (e) =>{
        e.preventDefault()
        console.log("object")
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text"/>
                        <button onClick={sendPost} type="submit" >Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color ="#70b5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color ="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color ="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Wrtie article" color ="#7FC15E" />
                </div>
            </div>
            {posts.map((post) => {
                <Post />
            })}
            <Post name="Nader Elhaj"
             description="this is a test"
             message="This Work !!"
              />
        </div>
    )
}

export default Feed
