import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src='assets/images/mk.jpg' title='Mkhalilo' />
            <SidebarRow Icon={LocalHospitalIcon} title='Covid-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' /> 
            <SidebarRow Icon={PeopleIcon} title='My Connections' />
            <SidebarRow Icon={ChatIcon} title='Messenge' />
            <SidebarRow Icon={LocalLibraryIcon} title='Service Request' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreIcon} title='Marketplace' /> 
        </div>
    );
}

export default Sidebar;
