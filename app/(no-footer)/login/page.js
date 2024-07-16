"use client"
import Link from "next/link"
import { useState, useRef } from "react";

export default function page() {
  const [error, setError] = useState("");
  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("http://localhost:3000/api/login", {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: emailInput.current.value,
        password: passwordInput.current.value
      })
    })
      .then(response => response.json())
      .then(response => {
        !!response.error && setError(response.message)
      })
      .catch(error => {
        console.log(error)
      });
  }

  return (
    <div className="bg-gray-200 h-[calc(100vh-77px)] flex md:items-center justify-center">
      <div className="bg-white mt-10 md:mt-0 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-12 w-11/12 max-w-screen-lg h-3/4">
        <div className="col-span-12 md:col-span-6 bg-black">
        </div>
        <div className="col-span-12 md:col-span-6 flex items-center justify-center">
          <div className="w-3/4">
            <h1 className="text-4xl">Accès premium</h1>
            <p className="mt-4 mb-7">Connecte toi et accède à <u>TOUTES</u> mes ressources <br /> pour la vie 🤝</p>
            <form onSubmit={(e) => onSubmit(e)}>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text" htmlFor="email">Email</span>
                </div>
                <input ref={emailInput} type="email" placeholder="john.doe@gmail.com" className="input input-bordered w-full" id="email" />
              </label>
              <label className="form-control w-full mt-3">
                <div className="label">
                  <span className="label-text" htmlFor="password">Mot de passe</span>
                </div>
                <input ref={passwordInput} type="password" placeholder="********" className="input input-bordered w-full" id="password" />
              </label>

              <button type="submit" className='btn btn-neutral text-white w-full mt-8' >
                Connexion
              </button>
              <div className="mt-3 text-right text-sm">
                <Link href="/reset-mdp">
                  <u>
                    Mot de passe oublié ?
                  </u>
                </Link>
              </div>
            </form>
            {
              !!error &&
              <div role="alert" className="alert alert-error py-2 px-2 mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="text-white">{error}</span>
              </div>
            }
          </div>

        </div>

      </div>
    </div>
  )
}
