import Faq from "@/components/Faq"

export default function Contact() {
    return (
        <div>
            <h1>Me contacter</h1>
            <p className="md:text-xl mt-4 text-base max-w-xl">
                Une question ou un projet ? Contactez-moi.
            </p>

            <div className="flex gap-10 mt-16">

            <Card title="Ecrivez moi un mail" text="Si vous avez des questions ou si vous avez besoin d'aide, n'hésitez pas à m'envoyer un petit message." cta="Me contacter" />
            
            <Card title="Devenez partenaire" text="Si vous êtes un Bootcamp ou une école, je serais ravi de proposer mes services à vos futurs élèves. Offrez leur un accès privilégié à une préparation de qualité et des avantages exclusifs." cta="Devenir partenaire" />
            
            <Card title="Proposer une mission" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga qui sapiente at dolores saepe animi perspiciatis commodi." cta="Me contacter" />

            </div>

            <Faq />
        </div>
    )
}

function Card({ title, text, cta }) {
    return (
        <div className="bg-stone-100 p-4 md:p-8 rounded-2xl w-1/3 lg:h-96 flex flex-col justify-between items-start">
            <div>
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="mt-3.5">{text}</p>
            </div>
            <div className="btn btn-outline bg-white">{cta}</div>
        </div>
    )
}