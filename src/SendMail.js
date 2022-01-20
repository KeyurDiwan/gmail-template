import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { closwSendMessage } from './features/mailSlice';
import {useForm} from 'react-hook-form'
import './SendMail.css';

function SendMail() {
    const { register, handleSubmit, watch, formState  } = useForm();

    const dispatch = useDispatch();
    
    const onSubmit = ( formData ) => {
        console.log(formData)
    }
    return <div className="sendMail">
        <div className="sendMail__header">
            <h3> New Message </h3>
            <Close
                onClick={ () => { dispatch(closwSendMessage())}}
                className='sendMail_close' />
            
           

        </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name='to'
                placeholder="To"
                type="text"
                  {...register("to", {
            required: "Required",
          })}
            />
            {/* <p>{formState.to} </p> */}
            {formState.errors.to && <p className="sendMail__error">To is Required</p>}
           
            <input
                name='subject'
                placeholder='Subject'
                type="text"
                 {...register("subject", {
            required: "Required",
          })}
            />
            {formState.errors.subject && <p className="sendMail__error">Subject is Required</p>}
            
            <input
                name = 'message'
                className="sendMail__message"
                placeholder='Message'
                type="text"
               {...register("message", {
            required: "Required",
          })}
            />
              {formState.errors.message && <p className="sendMail__error">message is Required</p>}

                <div className="sendMail__options">
                <Button
                    className="sendMail__send"
                    variant='contained'
                    color='primary'
                    type = 'submit'
                >send</Button>
                </div>
            </form>
        
  </div>
}

export default SendMail;
