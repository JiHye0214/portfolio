import React from "react";

const Contact = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5 items-center">
                    <p className="text-5xl font-bold">Contact Me</p>
                    <p className="text-center">
                        I’m always open to connecting! <br /> feel free to reach out via the form below or through my social
                        media.
                    </p>
                </div>
                <div className="h-[400px] bg-white flex items-center rounded-lg overflow-hidden shadow-lg shadow-gray-300">
                    <div className="h-full flex flex-col justify-between p-10">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-5">
                                <p className="w-[100px]">Email</p>
                                <p>qkrwlgp1526@gmail.com</p>
                            </div>
                            <div className="flex gap-5">
                                <p className="w-[100px]">Phone</p>
                                <p>+1 (604) 353-1248</p>
                            </div>
                            <div className="flex gap-5">
                                <p className="w-[100px]">Location</p>
                                <p>Vancouver, BC, Canada</p>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            <a href="https://github.com/JiHye0214" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/logo-github2.png" alt="" className="w-12" />
                            </a>
                            <a href="https://www.linkedin.com/in/jihye-p-2b3755344/" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/logo-linkedIn.png" alt="" className="w-10" />
                            </a>
                        </div>
                    </div>
                    <form
                        className="h-full w-[500px] bg-gray-300 bg-cover bg-center flex flex-col justify-center gap-4 px-10"
                        action=""
                    >
                        <input type="text" placeholder="Name" className="rounded-lg p-3 text-sm opacity-80" />
                        <input type="text" placeholder="Email" className="rounded-lg p-3 text-sm opacity-80" />
                        <textarea placeholder="Message" className="max-h-[130px] h-[130px] rounded-lg p-3 text-sm opacity-80" />
                        <button
                            type="button"
                            className="h-[50px] bg-blue-800 hover:bg-blue-900 text-white font-semibold py-2 rounded-lg"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
