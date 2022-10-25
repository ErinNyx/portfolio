import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Sidebar from '../Sidebar';
import './index.scss';

const Contact = () => {
    const refForm = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
        
        emailjs.send('service_jfpwill', 'template_23rvvnk', {
            name: refForm.current.name.value,
            email: refForm.current.email.value,
            subject: refForm.current.subject.value,
            message: refForm.current.message.value
        }, 'Peqg9uYy73BCLHSBU').then(
            () => {
                alert('Message sent!');
                window.location.reload(false);
            },
            (e) => {
                alert('Message failed, please try again later or if the issue continues please directly contact me with my linkedin on the left. Thanks!');
                console.log(e);
            }
        );
    }

    return (
        <div className='App'>
            <Sidebar />
            <div className='contact'>
                <h1>Contact Me</h1>
                <h3>If you want to get in touch, have a question, or are considering hiring me and would like to see my resume, you can contact me with the form below</h3>
                <form id='contact-form' ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type='text' name='email' placeholder='Email' required />
                        </li>

                        <li>
                            <input type='text' name='subject' placeholder='Subject' required />
                        </li>
                        <li>
                            <textarea name='message' placeholder='Message' required />
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='Send' required />
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}

export default Contact;