import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cloayx8','template_hwhkh9s',e.target,'user_XUx2hs4Z7T8AVDRMbbqDr')
        .then(res=>{console.log(res)}
        
        ).catch(err=>console.log(err));
        e.target.reset();
    }