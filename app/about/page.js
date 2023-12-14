import Image from "next/image"

export default function About() {
  return (
    <>
    <div className="bg-gray-50 rounded-3xl pt-4 px-8 pt-8 lg:px-16 flex flex-col lg:flex-row w-full lg:mt-10 m-auto items-center overflow-hidden">
      <div className="lg:w-3/5 lg:mb-12">
        <h1 className="mb-6 tracking-tight">A propos</h1>
        <p className="md:text-xl opacity-90 text-base max-w-xl">
         Yo, je suis un <strong>développeur web freelance basé à Nice</strong>. Avec 7 années d'expérience enrichissantes, j'ai acquis une expertise solide dans la création de sites web intuitifs. 
         </p>
         <br />
         <p className="md:text-xl opacity-90 text-base max-w-xl">
          Depuis quelque années j'enseigne en école supérieure et en bootcamp. J'aime la simplicité et l'efficacité, des valeurs que je transmets dans chaque projet et cours !
        </p>
      </div>
      <div className="relative w-3/4 lg:w-2/5 flex justify-end">
        <Image src="/assets/logo.svg" width={400} height={400} className="translate-y-6" alt="Illustration de Brice Eliasse" />
      </div>
    </div>
    
    </>
  )
}
