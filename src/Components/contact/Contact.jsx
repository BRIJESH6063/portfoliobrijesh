
import { useState } from "react";
import './contact.scss' 

export default function Contact() {
    const [message, setMessage] = useState(false) ;
    const handlesubmit = (e)=>{
        e.preventDefault() ;
        setMessage(true) ;
    }
    return (
        <div className='contact' id = 'contact'>
            <div className="left">
                <img src="assets/contact.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea  placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                    {message && <span>Thanks I will reply ASAP :)</span>}
                </form>
            </div>
        </div>
    )
}