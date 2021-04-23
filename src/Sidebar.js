import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className = "sidebar">
             <h1>I am a Sidebar Component</h1>
              <TwitterIcon/>
              <SidebarOption/>
        </div>
    )
}

export default Sidebar;
