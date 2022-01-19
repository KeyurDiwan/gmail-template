import { Button, IconButton } from '@material-ui/core';
import { AccessTime, Add, Duo, ExpandMore, LabelImportant, NearMe, Note, Person, Phone, Star } from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return <div className="sidebar">
        <Button
            startIcon={<Add fontSize='large' />}
             className = 'sidebar__compose'
        > Compose </Button>

        <SidebarOption
            Icon={InboxIcon}
            title='Inbox'
            number={54}
            selected={true} />
        <SidebarOption Icon={Star} title = 'Stared' number = {54} />
        <SidebarOption Icon={AccessTime} title = 'Snoozed' number = {54} />
        <SidebarOption Icon={LabelImportant} title = 'Important' number = {54} />
        <SidebarOption Icon={NearMe} title = 'Sent' number = {54} />
        <SidebarOption Icon={Note} title = 'Drafts' number = {54} />
        <SidebarOption Icon={ExpandMore} title = 'More' number = {54} />

        <div className="sidebar__footer">
            <div className="sidebar__footerIcon">
                <IconButton>
                    <Person />
                </IconButton>

                <IconButton>
                    <Duo />
                </IconButton>

                <IconButton>
                    <Phone />
                </IconButton>
            </div>
        </div>
        
  </div>;
}

export default Sidebar;
