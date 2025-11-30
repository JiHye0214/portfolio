import React, { useState } from "react";
import { motion } from "framer-motion";
// import { supabase } from "../supabaseClient";

const Contact = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loading, setLoading] = useState(false);

    const [inputBg, setInputBg] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    });

    const regexName = /^[A-Za-z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name } = e.target;
        setInputBg((prev) => ({ ...prev, [name]: "bg-pink-200 placeholder-pink-700" }));
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let newBg = "";

        if (value.trim() === "") {
            newBg = "bg-white";
        } else if (name === "email") {
            newBg = regexEmail.test(value) ? "" : "bg-pink-200";
        } else if (name === "message") {
            newBg = value.length > 0 ? "" : "bg-pink-200";
        } else {
            newBg = regexName.test(value) ? "" : "bg-pink-200";
        }

        setInputBg((prev) => ({ ...prev, [name]: newBg }));
    };

    const validateField = (name: string, value: string): boolean => {
        if (value.trim() === "") return false;
        if (name === "email") return regexEmail.test(value);
        if (name === "message") return value.length > 0;
        return regexName.test(value);
    };
    const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const values = Object.fromEntries(formData.entries()) as Record<string, string>;

        let isFormValid = true;

        const newInputBg: {
            firstname: string;
            lastname: string;
            email: string;
            message: string;
        } = {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        };

        for (const [key, value] of Object.entries(values)) {
            const valid = validateField(key, value);
            // key를 명시적으로 단언
            newInputBg[key as keyof typeof newInputBg] = valid ? "" : "bg-pink-200";
            if (!valid) isFormValid = false;
        }

        setInputBg(newInputBg);

        if (!isFormValid) return;

        setLoading(true);

        // if (isFormValid) {
        //     // console.log("폼 제출 데이터:", values);
        //     setLoading(true);
        //     const { data, error } = await supabase.from("contacts").insert([values]);
        //     setLoading(false);

        //     if (error) {
        //         console.error(error);
        //     } else {
        //         setFirstname("");
        //         setLastname("");
        //         setEmail("");
        //         setMessage("");
        //     }
        // }

        // Formspree endpoint 사용 (무료)
        const formspreeEndpoint = "https://formspree.io/f/xkgdnggq"; // ← 여기에 Formspree ID 넣기
        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstname: values.firstname,
                    lastname: values.lastname,
                    email: values.email,
                    message: values.message,
                }),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                setFirstname("");
                setLastname("");
                setEmail("");
                setMessage("");
            } else {
                alert("Failed to send message. Try again later.");
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred. Try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="w-full flex gap-10 justify-between">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-5">
                        <p className="text-5xl font-bold">Contact Me</p>
                        <p>
                            Let’s connect — I’d love to hear from you. <br />
                            Reach out through the form below or find me on social media.
                        </p>
                        <p>qkrwlgp1526@gmail.com</p>
                        <p>604-353-1248</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="https://github.com/JiHye0214" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo/github3.png" alt="" className="w-11" />
                        </a>
                        <a href="https://www.linkedin.com/in/jihye-p-2b3755344/" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/logo/linkedin.png" alt="" className="w-10" />
                        </a>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <form
                        className="min-w-[500px] bg-[#eaeaea] bg-cover bg-center flex flex-col justify-center gap-4 p-10 shadow-xl rounded-lg shadow-gray-300"
                        action=""
                        onSubmit={submitContact}
                    >
                        <div className="mb-5 flex flex-col gap-2">
                            <p className="text-3xl font-bold">Get in touch</p>
                            <p>
                                Drop me a message anytime. <br />
                                I’ll get back to you as soon as I can.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={(e) => setFirstname(e.target.value)}
                                value={firstname}
                                className={`w-full rounded-full px-4 py-3 text-sm opacity-80 transition-all duration-300 ease-in-out ${inputBg.firstname}`}
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onChange={(e) => setLastname(e.target.value)}
                                value={lastname}
                                className={`w-full rounded-full px-4 py-3 text-sm opacity-80 transition-all duration-300 ease-in-out ${inputBg.lastname}`}
                            />
                        </div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Your Email"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className={`rounded-full px-4 py-3 text-sm opacity-80 transition-all duration-300 ease-in-out ${inputBg.email}`}
                        />
                        <textarea
                            placeholder="Message"
                            name="message"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            className={`max-h-[130px] h-[130px] rounded-2xl p-4 text-sm opacity-80 transition-all duration-300 ease-in-out ${inputBg.message}`}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="h-[50px] bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-full disabled:opacity-50"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
