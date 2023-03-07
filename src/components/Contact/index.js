import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const refForm = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
            .sendForm(
                'service_23ky32j',
                'contact_form',
                refForm.current,
                'WwH2JaK2ptpNb4zI8'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send, try again')
                }
            )
    }
    return(

        <div className='containder contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ',
                'M', 'e']} idx={15}/>
                </h1>
                <p>Please leave your preferred email/number of contact within the message.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input  type="text" placeholder="Subject" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact