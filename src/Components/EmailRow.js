import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import './EmailRow.css';
import { useNavigate } from 'react-router-dom';


function EmailRow({title, subject, description, time}) {
   
    const history = new useNavigate();
    
    return <div onClick={ () => history('/mail')} className="emailRow"> 
        
        <div className="emaiRow__options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlined />
            </IconButton>
             <IconButton>
                <LabelImportantOutlined />
            </IconButton>

        </div>

        <h3 className="emailRow__title">
                {title}
        </h3>

        <div className="emailRow__message">
            <h4>{subject}
                <span className="emailRow__description">
                    {description}
            </span>
            </h4>
        </div>

        <div className="emailRow__time">
            {time}
        </div>
      
  </div>;
}

export default EmailRow;
