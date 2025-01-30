import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i8ypp0j', 'template_ofvnx8x', form.current, {
        publicKey: 'cos4E-bpzICIPjoVQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="user_name" /><br />
      <label>Email</label><br />
      <input type="email" name="user_email" /><br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <input className="button" type="submit" value="Send" />
    </form>
  );
};

export default ContactUs