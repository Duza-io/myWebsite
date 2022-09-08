import React, { useState } from "react";
import axios from 'axios';
import "../App.css"

export default function Form() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xqkjedyd',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    alert("Message sent!"),
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
        // e.target.reset()
    };
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative hide-map">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Area 51 E-sports Pag-asa Binangonan&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md hide-contact">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1">
                                Catolos Compound <br />
                                Sitio Sapa Barangay Pag-Asa Binangonan, Rizal
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <p className="text-indigo-400 leading-relaxed">
                                markandrewduza19@gmail.com
                            </p>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed">+639950446878</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleOnSubmit} className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contact Me
                    </h2>
                    <p className="leading-relaxed mb-5">
                        You can contact me anytime for inquiries or to give a comment or suggestions. I'm available for commissions.
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="_replyto"
                            onChange={handleOnChange}
                            required
                            value={inputs.email}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleOnChange}
                            required
                            value={inputs.message}
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <button className="bg-transparent hover:bg-green-500 text-white font-semibold hover:text-black py-2 px-4 border border-green-500 hover:border-transparent rounded" type="submit" disabled={status.submitting}>
                        {!status.submitting
                            ? !status.submitted
                                ? 'Submit'
                                : 'Submitted \u2713'
                            : 'Submitting...'}
                    </button>

                </form>
                {status.info.error && (
                    <div className="error">Error: {status.info.msg}</div>
                )}
                {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
            </div>
        </section>
    );
}