"use client"
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const demos = [
    {
        id: 1,
        icon: "🖌️",
        title: "Vidéo présentative + Maquette Figma",
        text: "Je te présente le projet que tu as choisi et tu obtiens la maquette Figma que tu peux personnaliser si tu le souhaites",
        illustration: "",
    },
    {
        id: 2,
        title: "Correction en vidéo",
        icon: "🔧",
        text: "Tu as fini ou tu es bloqué durant le challenge ? Tu peux consulter à tout moment la vidéo corrective chapitrée",
        illustration: "",
    },
    {
        id: 3,
        title: "Code source + Site en ligne",
        icon: "🌐",
        text: "Tu veux comparer nos versions ? Tu as accès à l'intégralité du code de l'exercice ainsi qu'à la version en ligne",
        illustration: "",
    }
]
export default function Demos() {
    const [selectedDemo, setSelectedDemo] = useState(demos[0]);


    return (
        <div className="grid grid-cols-12 gap-28 ">
            <div className="flex flex-col gap-4 col-span-6">
                <div className="badge badge-outline border-neutral-400 py-3 px-4 text-neutral-400">Project-Based Learning</div>
                <h2 className='text-white m-0'>Comment va se dérouler ton apprentissage</h2>
                <p className='text-lg text-neutral-400 mb-6'>Tu vas avoir accès à la totalité des exercices que j'ai conçu pour apprendre Javascript de manière optimale. De là tu sélectionnes l'exercice qui correspond à tes envies et ton niveau.</p>
                {
                    demos.map(demo => <div key={demo.id} onClick={() => setSelectedDemo(demo)} className={` ${demo.id === selectedDemo.id ? "bg-[#2e2e32] border border-neutral-600" : "bg-neutral-800"} cursor-pointer  rounded-lg p-5`}>
                        <div className="flex items-center gap-4">
                            <span className="text-xl">{demo.icon}</span>
                            <div>
                                <h3 className="font-semibold tracking-tight  text-white">{demo.title}</h3>
                                <p className="text-neutral-400" >{demo.text}</p>
                            </div>
                        </div>
                        {/* <p className="my-2">Ils doivent contracter du savoir normalement acquis en plusieurs années, en seulement quelques semaines. Si vous accumulez du retard, vous êtes cuit.</p> */}
                    </div>)
                }
            </div>
            <div className="relative col-span-6">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedDemo.id}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="h-full w-full object-cover z-0"
                        src="assets/courses/functions.png"
                        alt={`Illustration "${selectedDemo.title}"`} />
                </AnimatePresence>
                <img src="/assets/demos/cog.png" alt="Illustration d'écrou" className="absolute w-40 -bottom-16 -left-20 z-10 opacity-95" />
            </div>
        </div>
    )
}
