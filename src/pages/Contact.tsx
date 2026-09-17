import React, { useState } from "react";
import { motion } from "framer-motion";

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

        setInputBg((prev) => ({
            ...prev,
            [name]: "bg-gray-100",
        }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let newBg = "";

        if (value.trim() === "") {
            newBg = "";
        } else if (name === "email") {
            newBg = regexEmail.test(value) ? "" : "bg-gray-100";
        } else if (name === "message") {
            newBg = "";
        } else {
            newBg = regexName.test(value) ? "" : "bg-gray-100";
        }

        setInputBg((prev) => ({
            ...prev,
            [name]: newBg,
        }));
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

        const newInputBg = {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
        };

        for (const [key, value] of Object.entries(values)) {
            const valid = validateField(key, value);

            newInputBg[key as keyof typeof newInputBg] = valid ? "" : "bg-gray-100";

            if (!valid) isFormValid = false;
        }

        setInputBg(newInputBg);

        if (!isFormValid) return;

        setLoading(true);

        const formspreeEndpoint = "https://formspree.io/f/xkgdnggq";

        try {
            const response = await fetch(formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
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
        <main className="min-h-[calc(100vh-96px)] flex items-center">
            <section className="w-full max-w-[1200px] mx-auto py-14 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-16 md:gap-24 items-center">
                    {/* Left */}
                    <div className="flex flex-col justify-between min-h-[430px]">
                        <div>
                            <p className="text-xs uppercase tracking-[0.14em] text-gray-400 mb-4">Get in touch</p>

                            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-[-0.06em] leading-[0.9]">
                                LET'S
                                <br />
                                TALK.
                            </h1>

                            <p className="mt-8 max-w-md text-sm md:text-base leading-relaxed text-gray-500">
                                Have a project in mind, want to collaborate, or just want to say hello?
                                <br />
                                Feel free to reach out.
                            </p>

                            <div className="mt-8 flex flex-col gap-2 text-sm">
                                <a href="mailto:devstudio.hey@gmail.com" className="w-fit hover:text-gray-500 transition-colors">
                                    devstudio.hey@gmail.com
                                </a>

                                <p className="text-gray-400">604-353-1248</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/JiHye0214"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity hover:opacity-60"
                            >
                                <img src="/assets/logo/github3.png" alt="GitHub" className="w-9" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/jihye-p-2b3755344/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-opacity hover:opacity-60"
                            >
                                <img src="/assets/logo/linkedin.png" alt="LinkedIn" className="w-8" />
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                        }}
                    >
                        <form onSubmit={submitContact} className="w-full border border-black/10 p-7 md:p-10">
                            <div className="mb-8">
                                <p className="text-2xl font-semibold tracking-[-0.03em]">Send a message</p>

                                <p className="mt-2 text-sm text-gray-400">I'll get back to you as soon as I can.</p>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        value={firstname}
                                        className={`w-full border-b border-black/15 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-black transition-colors ${inputBg.firstname}`}
                                    />

                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        onChange={(e) => setLastname(e.target.value)}
                                        value={lastname}
                                        className={`w-full border-b border-black/15 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-black transition-colors ${inputBg.lastname}`}
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
                                    className={`w-full border-b border-black/15 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-black transition-colors ${inputBg.email}`}
                                />

                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    className={`w-full h-[140px] resize-none border-b border-black/15 bg-transparent px-1 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-black transition-colors ${inputBg.message}`}
                                />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="mt-5 flex items-center justify-between border-b border-black py-3 text-sm font-medium group disabled:opacity-50"
                                >
                                    <span>{loading ? "Sending..." : "Send Message"}</span>

                                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
