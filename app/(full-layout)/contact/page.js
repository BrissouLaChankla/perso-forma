import Form from "@/components/Contact/Form"
import Faq from "@/components/Faq"
import Link from "next/link"
import Image from "next/image"

export default function Contact() {
    return (
        <div>
            <h1>Me contacter</h1>
            <p className="md:text-xl mt-4 text-base max-w-xl">
                Une question ou un projet ? Contactez-moi.
            </p>

            <div className="flex gap-10 mt-16">

                <Card title="Discuter" text="Si vous avez des questions ou si vous avez besoin d'aide, n'hésitez pas à m'envoyer un petit message sur LinkedIn ou par mail, c'est toujours un plaisir de discuter." cta="Me contacter" />

                <Card title="Devenir partenaire" text="Si vous êtes un Bootcamp ou une école, je serais ravi de proposer mes services à vos futurs élèves. Offrez leurs un accès à mes cours et mon accompagnement pour augmenter votre taux de réussite et soulager vos intervenants." cta="Devenir partenaire" slug="devenir-partenaire" />

                <Card title="Proposer une mission" text="Quand je n'enseigne pas, je code. Si vous cherchez donc un développeur web Freelance (situé à Nice) pour votre projet, vous pouvez me contacter" cta="Me contacter" />

            </div>
            <div id="formulaire"></div>

            <div className="mt-24" >
                <h2 className="mb-4">
                    Parlons de votre projet
                </h2>
                <p>Et si jamais vous préférez, vous pouvez directement m'envoyer un mail : <a className="link" href="mailto:hello@brice-eliasse.com">hello@brice-eliasse.com</a></p>

                <div className='grid grid-cols-5 gap-24 mt-12'>
                    <div className="col-span-3">
                    <Form />
                    </div>
                    <div className="flex flex-col gap-8 col-span-2 justify-center ">
                        <Image src="/assets/partners/g2.png" width={130} height={130} className="opacity-80" />
                        <div className="relative">
                            <svg className="absolute -top-5 -start-5 h-10 w-10 text-gray-100 z-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor" />
                            </svg>
                            <blockquote className="z-10 relative">J'ai eu l'opportunité de travailler avec Brice pour un projet chez <a href="https://g2esports.com" className="font-bold link" target="_blank" >G2 Esports</a> et je ne peux que recommander ses services : exécution rapide, qualitative et flexible !</blockquote>
                        </div>

                        <div className="flex items-center gap-4">
                            <div>
                                <Image src="/assets/partners/p.webp" className=" rounded-full" width={45} height={45} />
                            </div>
                            <div>
                                <div className="font-bold">Pierre S.</div>
                                <small>Brand Manager - G2 Esports</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Faq />
        </div>
    )
}

function Card({ title, text, cta, slug }) {
    return (
        <div className="bg-stone-100 p-4 md:p-8 rounded-2xl w-1/3 lg:h-96 flex flex-col justify-between items-start">
            <div>
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="mt-3.5">{text}</p>
            </div>
            <Link href={slug || "#formulaire"} className="btn btn-outline bg-white">{cta}</Link>
        </div>
    )
}