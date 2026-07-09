import "./Contact.css";
import { useState } from "react";
import toast from "react-hot-toast";

import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Contact() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setError("");

        if (!form.name.trim()) {
            setError("Name is required");
            setLoading(false);
            return;
        }

        if (!form.email.trim()) {
            setError("Email is required");
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(form.email)) {
            setError("Enter a valid email address");
            setLoading(false);
            return;
        }

        if (!form.subject.trim()) {
            setError("Subject is required");
            setLoading(false);
            return;
        }

        if (!form.message.trim()) {
            setError("Message is required");
            setLoading(false);
            return;
        }

        try {

            await addDoc(
                collection(db, "contacts"),
                {
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                    createdAt: serverTimestamp(),
                }
            );

            toast.success("Message sent successfully!");

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (err) {

            console.error(err);
            toast.error("Failed to send message.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <section className="contact-page">

            <div className="contact-container">

                <h1>
                    Contact Us
                </h1>

                <p>
                    Have questions or need support?
                    Feel free to contact our team.
                </p>

                {
                    error &&
                    <p className="form-error">
                        {error}
                    </p>
                }

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        value={form.message}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>

            </div>

        </section>

    );

}

export default Contact;