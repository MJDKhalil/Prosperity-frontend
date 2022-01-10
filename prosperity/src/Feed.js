import React from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic='assets/images/mk.jpg'
                message='WoW greate progress'
                timestamp='this is timestamp'
                username='mokhalil'
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTTkGCA3xaoq3_76c7WzUGtkJuINA3tkldLQ&usqp=CAU'
            />
            <Post 
                profilePic='https://media-exp1.licdn.com/dms/image/C4E03AQHb35OIPk-kOA/profile-displayphoto-shrink_800_800/0/1613731692526?e=1646870400&v=beta&t=XFC_KhIubEfg_63LgyZqj6J0wuWQNwkp9slO9YZgneE'
                message='I can not believe I won Koh-Lanta'
                timestamp='this is timestamp'
                username='Jenny'
            />
            
            <Post />
        </div>
    )
}

export default Feed
