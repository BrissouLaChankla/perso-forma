"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

const lacunes = [
    {
        id: 1,
        emoji: "🪽",
        title: "Trop léger",
        text: "Certaines notions méritent plus d'attention.",
        illustration: "",
    },
    {
        id: 2,
        title: "Tutorial Hell",
        emoji: "🫧",
        text: "La sensation d'avoir bien travaillé... mais non.",
        illustration: "",
    },
    {
        id: 3,
        title: "Pas pratiquer",
        emoji: "🐺",
        text: "Arrêtez de regarder des tutos sans pratiquer !",
        illustration: "",
    },
    {
        id: 4,
        title: "Imposteur",
        emoji: "🤡",
        text: "Vous pensez que vous êtes moins bons que les autres.",
        illustration: "",
    },
]


export default function Lacunes() {

    const [selectedCard, setSelectedCard] = useState(lacunes[0]);

    return (
        <div className="grid grid-cols-4 gap-6">
            {
                lacunes.map(lacune => <div key={lacune.id} onClick={() => setSelectedCard(lacune)} className={` ${lacune.id === selectedCard.id ? "bg-white border rotate-1" : "opacity-80 bg-gray-100"} cursor-pointer  rounded-lg p-5`}>
                    <div className="flex items-center justify-between">
                        <h3 className="font-bold">{lacune.title}</h3>
                        {
                            lacune.id === selectedCard.id &&
                            <span className="text-xl">{lacune.emoji}</span>
                        }
                    </div>
                    {/* <p className="my-2">Ils doivent contracter du savoir normalement acquis en plusieurs années, en seulement quelques semaines. Si vous accumulez du retard, vous êtes cuit.</p> */}
                    <p className="mt-2 text-sm">{lacune.text}</p>
                </div>)
            }
            <div className="col-span-4 mt-10">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedCard.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="w-2/3 m-auto h-96 object-cover"
                        src="assets/courses/functions.png"
                        // src={selectedCard.illustration}
                        alt={`Illustration "${selectedCard.title}"`} />
                </AnimatePresence>
            </div>


        </div>
    )
}
