import React from 'react'
import "./Sidebar.css"
import XIcon from '@mui/icons-material/X';
import SidebarOption from '../SidebarOption/SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';


function Sidebar() {
    return (
        <div className = "sidebar">
           <XIcon
              className = "sidebar__twitterIcon"                
           /> 

           <SidebarOption active
              Icon = {HomeIcon}
              text = "Home"  
           />
           <SidebarOption 
              Icon = {SearchIcon}
              text = "Explore"  
           />
           <SidebarOption 
              Icon = {NotificationsNoneIcon}
              text = "Notifications"  
           />
           <SidebarOption 
              Icon = {MailOutlineIcon}
              text = "Message"  
           />
           <SidebarOption 
              Icon = {BookmarkBorderIcon}
              text = "Bookmarks"  
           />
           <SidebarOption
              Icon = {ListIcon} 
              text = "Lists"  
           />
           <SidebarOption 
              Icon = {PermIdentityIcon}
              text = "Profile"  
           />
           <SidebarOption 
              Icon = {MoreHorizIcon}
              text = "More"  
           />
           
           <Button variant = "outlined" className = "sidebar__tweet">Tweet</Button>
        </div>
    )
}

export default Sidebar