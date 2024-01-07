import Image from "next/image"
import Faq from "@/components/Faq"
import Marquee from "@/components/Reviews/Marquee"

export default function About() {
  return (
    <>
      <div className="bg-stone-50 rounded-3xl pt-4 px-8 pt-8 lg:px-16 flex flex-col lg:flex-row w-full lg:mt-6 m-auto items-center overflow-hidden">
        <div className="lg:w-3/5 lg:mb-12">
          <h1 className="mb-6 tracking-tight">A propos</h1>
          <p className="md:text-xl opacity-90 text-base max-w-xl">
            Salut, je suis un <strong>développeur web freelance basé à Nice</strong>. Avec {new Date().getFullYear() - 2016} années d'expérience, j'ai acquis une expertise solide dans la création de sites web et d'applications.
          </p>
          <br />
          <p className="md:text-xl opacity-90 text-base max-w-xl">
            Depuis quelque années j'enseigne en école supérieure et en bootcamp. J'aime la simplicité et l'efficacité, des valeurs que je transmets dans chaque projet et cours !
          </p>
          <br />
          <div className="flex gap-2">
            <a href="https://github.com/BrissouLaChankla" target="_blank">
              <Image src="/assets/icons/github.svg" width={25} height={25} className="opacity-80" alt="Logo Github" />
            </a>
            <a href="https://www.linkedin.com/in/brice-eliasse" target="_blank">
              <Image src="/assets/icons/linkedin.svg" width={25} height={25} className="opacity-80" alt="Logo LinkedIn" />
            </a>
          </div>
        </div>
        <div className="relative w-3/4 lg:w-2/5 flex justify-end">
          <Image src="/assets/logo.svg" width={400} height={400} className="translate-y-6" alt="Illustration de Brice Eliasse" />
        </div>
      </div>

        <h2 className="lg:w-1/2 text-4xl mt-28 font-extrabold leading-normal">
          J'aide les futurs Développeurs Web à mieux préparer leur Formation
        </h2>

        <div className="flex py-12">
          <div className="w-4/12">
            <p className="md:text-xl text-base max-w-xl">
              En 2022, alors que je voulais rejoindre le Canada pour y travailler en tant que développeur, j'ai décidé de me payer une formation Bootcamp car je n'en n'avais jamais fait auparavant. C'est un sujet clivant dans la communauté des développeurs et je souhaitais me faire mon propre avis.</p>
            <br />
            <p className="md:text-xl text-base max-w-xl">
              J'ai donc décidé de m'offrir une <strong>formation Bootcamp chez La Capsule à Nice</strong> et je dois dire que même pour un développeur comme moi, le rythme était soutenu. Finalement, mon Bootcamp là bas s'est tellement bien passé que j'ai décidé d'annuler mes plans pour rejoindre l'équipe de La Capsule en tant que teacher et ainsi former à mon tour d'autres développeurs.
            </p>

          </div>

          <div className="w-4/12 relative">
            <Image src="/assets/stand_up.svg" fill={true} />
          </div>

          <div className="w-4/12">
            <p className="md:text-xl text-base max-w-xl">Désormais je suis de l'autre côté et j'aperçois tous les problèmes et les interrogations que peuvent rencontrer les élèves de Bootcamp.</p>
            <br />

            <p className="md:text-xl text-base max-w-xl">Que ce soit le manque de préparation technique avant d'entrer dans le programme, les difficultés à suivre le rythme intense des cours, ou même l'adaptation à un tout nouveau domaine, je vois tous les défis auxquels ils sont confrontés.</p>
            <br />

            <p className="md:text-xl text-base max-w-xl">Je propose donc des formations préparatoires pour pallier les difficultés initiales. Ces sessions visent à équiper les élèves d'une solide base technique et à démystifier la formation et le métier de dev. D'ailleurs je propose aussi des accompagnements personnalisés !</p>
          </div>
        </div>
        <Faq />
     
        <Marquee />
        

    </>
  )
}
