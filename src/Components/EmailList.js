import { Checkbox, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@material-ui/icons';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Inbox from '@material-ui/icons/Inbox';
import React from 'react';
import './EmailList.css';
import EmailRow from './EmailRow';
import Section from './Section';

function EmailList() {
    return <div className = "emailList">
        <div className="emailList__settings">
            <div className="emailList__settingsLeft">
                <Checkbox />
                <IconButton>
                    <ArrowDropDown />
                </IconButton>
                <IconButton>
                    <Redo />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>

            <div className="emailList__settingsRight">
                <IconButton>
                    <ChevronLeft />
                </IconButton>
                <IconButton>
                    <ChevronRight />
                </IconButton>
                <IconButton>
                    <KeyboardHide />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>

        <div className="emailList__section">
            <Section
                Icon={Inbox}
                title='primary'
                color='red'
                selected />
            
            <Section Icon = {People} title = 'social' color = '#1A73E8' />
            <Section Icon = {LocalOffer} title = 'Promotions' color = 'green' />
        </div>
        <div className="emailList__list">
            <EmailRow
                title="Keyur"
            subject = 'Hey hi '
                description='kdkjfjnsvnjlfvn'
                time = '10pm'
            />
        </div>
  </div>
}

export default EmailList;
