import TextMorph from '@/components/TextMorph'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-12">
      <div className='text-center flex flex-col items-center'>
          <Image src="/assets/logo.svg"
            width={425}
            height={425}
            className='z-10 w-64 md:w-2/5'
            alt="Illustration de Brice Eliasse"
          />
      <h1 className='text-4xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl '>
        Apprenez les Bases <br />du Développement Web 
      </h1>
      <p className='mt-6 md:mt-12 opacity-60 text-2xl'>Vous allez démarrer une formation pour devenir développeur web mais vous redoutez le challenge ? <br /> Que ce soit études supérieure ou Bootcamp, voyons ça ensemble.</p>
      {/* <p className='mt-12 opacity-60 text-2xl'>Apprenez à faire un site internet sans avoir l'impression qu'on vous parle 中国人 <br /> Cours puis exercices, on va à l'essentiel</p> */}
      <TextMorph />
      </div>
     
    </main>
  )
}
