import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Avatar } from '@mui/material';

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src='assets/images/logo.png' alt=''/>
                <div className='header__input'></div>
                    <SearchIcon />
                    <input type='text' />
            </div>

            <div className='header__middle'>
                <div className='header__option'>
                    <HomeIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <FlagIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <StorefrontIcon fontSize='large'/>
                </div>
                <div className='header__option'>
                    <SupervisorAccountIcon fontSize='large'/>
                </div>

            </div>

            <div className='header__right'>
                <div className='header__info'/>
                <Avatar />
            </div>
            
        </div>
    )
}

export default Header;
