import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import './MessageSender.css';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function MessageSender() {
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();

        // some clever db atuff
        setInput('');
        setImageUrl('');
    };

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className='messageSender__input' placeholder={'What do you want to share?'} />
                    
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='image URL (Optional)'/>

                    <button onClick={handleSubmit} type='submit'>Hidden Submit</button>
                </form>
            </div>

            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideoCallIcon style={{ color: 'purple'}} />
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender__option'>
                    <AddAPhotoIcon style={{ color: 'orange'}} />
                    <h3>Video/Photo</h3>
                </div>

                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{ color: 'green'}} />
                    <h3>Mood</h3>
                </div>
                
            </div>
        </div>
    )
}

export default MessageSender
