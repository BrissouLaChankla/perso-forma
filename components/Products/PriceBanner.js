import Image from "next/image"

export default function PriceBanner() {
    return (
        <div className="bg-gradient-to-b from-stone-700 to-stone-900 text-white w-screen mt-20 mb-14 overflow-hidden">
            <div className="max-w-screen-xl flex m-auto">
                <div className="py-28 text-start w-3/5 pe-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Tarifs</h2>
                    <p className="text-white my-3 text-2xl">Payez une fois et c'est à vous 🔥</p>
                    <div>
                        <p className="text-white text-lg mt-8">
                            Économisez votre argent ! Oubliez les abonnements mensuels pénibles qui reviennt trop cher. Ici vous ne payez qu'une fois et vous avez accès à ce cours pour la vie.
                        </p>
                        <p className="text-white text-lg mt-6">
                            Accédez-y depuis votre ordinateur portable, votre tablette ou votre téléphone.
                        </p>
                    </div>
                </div>
                <div className="py-28 text-start max-w-screen-xl w-2/5 relative">
                    <Image src="/assets/pricing/tem.png" className="absolute bottom-0" width={800} height={800} />
                </div>
            </div>
        </div>
    )
}
