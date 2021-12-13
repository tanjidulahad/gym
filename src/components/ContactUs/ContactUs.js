import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import swal from 'sweetalert';
import Spinner from '../shared/Spinner/Spinner';
import './ContactUs.css';
const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const email = useRef();
    const handleSendEmail = e => {
        setLoading(true);
        emailjs.sendForm('service_8gozdrf', 'template_tal4dtm', email.current, 'user_hzsSd56LI1uZ9FJhZZ8YG')
            .then((result) => {
                if (result.text === 'OK') {
                    setLoading(false);
                    swal('Message sent successfully!!! We will get you soon.');
                    e.target.reset();
                }
                // console.log(result.text);
            }, (error) => {
                if (error) {
                    setLoading(false);
                    swal('Something went Wrong');
                }
                console.log(error.text);
            });
        e.preventDefault()
    }
    return (
        <div className="contactus" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>CONTACT US</h2>
                        {loading && <Spinner></Spinner>}

                        < form ref={email} className='contactusform' onSubmit={handleSendEmail}>
                            <div class="mb-3">
                                <input type="text" placeholder='Full Name' class="form-control" name='name' />
                            </div>
                            <div class="mb-3">
                                <input type="email" placeholder='Type Your Email' class="form-control" name='email' />
                            </div>
                            <div class="mb-3">
                                <textarea type="text" placeholder='Type Here...' name='message' class="form-control" />
                            </div>
                            <button type="submit" class="form-control btn">Send</button>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </div >
    );
};

export default ContactUs;