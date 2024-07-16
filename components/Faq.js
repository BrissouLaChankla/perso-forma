'use client';

import { useState } from "react";

export default function Faq() {
    const [selectedFaq, setSelectedFaq] = useState("option0")

    const data = [
        {
            question: "Quels services proposez-vous exactement ?",
            answer: "Je propose une variété de services pour préparer et accompagner les étudiants avant et pendant leur bootcamp en développement web. Cela inclut des séances de coaching individuelles, des programmes de préparation, des ressources d'apprentissage en ligne, et un soutien personnalisé tout au long de votre parcours d'apprentissage."
        },
        {
            question: "Quelle est l'utilité d'une préparation avant un bootcamp ?",
            answer: "La préparation avant un bootcamp est cruciale pour solidifier vos bases en programmation, vous familiariser avec les outils et les langages que vous utiliserez, et vous mettre dans les meilleures conditions pour tirer le maximum de l'expérience intensive que représente un bootcamp."
        },
        {
            question: "Proposez-vous un soutien après le bootcamp ?",
            answer: "Oui, je propose un soutien post-bootcamp pour vous aider dans votre transition vers le monde professionnel, que ce soit pour la recherche d'emploi, la création de votre portfolio, ou des conseils de carrière."
        },
        {
            question: "Comment garantissez-vous la qualité de vos services ?",
            answer: "Ma méthodologie s'appuie sur mon expérience professionnelle en développement web et en enseignement. Je m'engage à fournir un contenu pédagogique de qualité, des retours constructifs, et un suivi personnalisé pour garantir la satisfaction de mes étudiants."
        }
    ];

    const handleChange = (event) => {
        setSelectedFaq(event.target.value);
    };

    const tabs = data.map((el, i) => {
        return (
            <div className="collapse collapse-arrow join-item border border-base-300 bg-white" key={i}>
                <input type="radio"
                    value={`option${i}`}
                    name="myRadioGroup"
                    checked={selectedFaq === `option${i}`}
                    onChange={handleChange} />
                <div className="collapse-title text-xl font-medium">
                    {el.question}
                </div>
                <div className="collapse-content">
                    <p>{el.answer}</p>
                </div>
            </div>
        )
    })



    return (
        <div className="bg-stone-100 mt-24 p-24 rounded-2xl">
            <div className="text-center flex flex-col items-center">

                <h2 className="font-bold text-4xl">Vous avez des questions ?</h2>
                <p className="text-xl">Parcourez ma FAQ pour en savoir plus sur mes services et comment je peux vous aider à réussir votre parcours de développeur web.</p>
            </div>
            <div className="join join-vertical w-full mt-12">
                {tabs}
            </div>
        </div>
    )
}
