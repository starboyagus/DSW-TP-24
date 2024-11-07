import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import './Help.css';

export function Help() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ypyb48j', 'template_iejz0rb', form.current!, {
                publicKey: 'cO0nIpEJQcJ5Fdgqc',
            })
            .then(
                () => {
                    console.log('SUCCESS');
                    return toast.success('Mail enviado con éxito!');
                },
                (error) => {
                    console.log('FAILED', error.text);
                    return toast.error('Ocurrió un error al enviar el Mail');
                },
            );
    };

    const [formData, setFormData] = useState({ user_name: "", user_email: "", message: "" });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <>
            <div className="help-container">
                <h1 className="help-title">Contact Us</h1>
                <form ref={form} onSubmit={sendEmail} className="help-form">
                    <label className="help-label">Name</label>
                    <div className="input-container">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Your Name"
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <label className="help-label">Your Email</label>
                    <div className="input-container">
                        <input
                            type="email"
                            className="input-field"
                            placeholder="name@utimban.com"
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <label className="help-label">Message</label>
                    <textarea
                        rows={4}
                        className="textarea-field"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <input type="submit" className="submit-button" value="Send" />
                </form>
            </div>
        </>
    );
}