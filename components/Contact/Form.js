'use client'
import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false);
    const [showToast, setShowToast] = useState(false)
    const [error, setError] = useState('')

    function onSubmit(e) {
        setLoading(true);
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/WUqCW7dYVzM", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    setName("")
                    setEmail("")
                    setMessage("")
                    setShowToast(true);
                    setTimeout(function () {
                        setShowToast(false);
                    }, 8000);
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
                setLoading(false);
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
                setTimeout(function () {
                    setError("");
                }, 8000);
            });
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <div className='grid grid-cols-2 gap-6'>
                <label className="form-control w-full formcarry-block">
                    <div className="label">
                        <span className="label-text" htmlFor="name">Nom</span>
                    </div>
                    <input required type="text" placeholder="John Doe" className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} id="name" />
                </label>

                <label className="form-control w-full formcarry-block">
                    <div className="label">
                        <span className="label-text" htmlFor="email">E-mail</span>
                    </div>
                    <input required type="email" placeholder="john.doe@gmail.com" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                </label>
            </div>


            <label className="form-control mt-3">
                <div className="label">
                    <span className="label-text">Votre message</span>
                </div>
                <textarea required className="textarea textarea-bordered h-24" placeholder="Entrez votre message..." value={message} onChange={(e) => setMessage(e.target.value)} id="message" ></textarea>
            </label>

            <div className="formcarry-block mt-8">
                <button type="submit" className='btn btn-neutral text-white w-full' disabled={loading}>
                    {loading ? <span className="loading loading-spinner loading-sm"></span> : "Envoyer"}


                </button>
            </div>

            {
                showToast &&
                <div className="toast toast-end">
                    <div className="alert alert-success text-white opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Bien reçu, je vous répond au plus vite 🫡</span>
                    </div>
                </div>
            }
            {
                error &&
                <div className="toast toast-end">
                    <div className="alert alert-error text-white opacity-90">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>
                </div>

            }
        </form>
    )
}