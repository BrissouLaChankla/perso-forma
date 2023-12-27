import TextMorph from '@/components/TextMorph'
import Image from 'next/image'
import Cta from '@/components/Menu/Cta'
import Global from '@/components/Reviews/Global'
import BigProduct from '@/components/Products/BigProduct'
import { promises as fs } from 'fs';
import ReviewsMansonry from '@/components/Reviews/Masonry'
import TitleSub from '@/components/TitleSub';
import Course from '@/components/Products/Course'


export default async function Home() {
  const offersFetch = await fs.readFile(process.cwd() + '/data/offers.json', 'utf8');
  const offersData = JSON.parse(offersFetch);
  const offers = offersData.map((el, i) => <BigProduct key={i} {...el} />)
  
  const coursesFetch = await fs.readFile(process.cwd() + '/data/courses.json', 'utf8');
  const coursesData = JSON.parse(coursesFetch);
  const courses = coursesData.map((el, i) => <Course key={i} {...el} />)


  // Que les 2 premières du JSON

  return (
    <>
      <div className='text-center flex flex-col items-center -mt-8'>
        <div className='relative w-full flex justify-center'>
        <Image src="/assets/logo.svg"
        priority
          width={425}
          height={425}
          className='z-10 w-1/2 md:w-[30%]'
          alt="Illustration de Brice Eliasse"
        />
        <TextMorph />
          
        </div>
        <h1 className='max-w-5xl'>
          Préparez votre Bootcamp en Développement Web  
          {/* Apprenez les Bases du Développement Web */}
        </h1>
        <p className='mt-5 md:mt-5  md:text-xl max-w-5xl'>Vous allez commencer une formation ou un Bootcamp pour devenir développeur web mais vous redoutez le challenge ? Vous êtes au bon endroit.</p>
        <div className="flex flex-col md:flex-row gap-x-2 mt-5 w-full justify-center">
          <button className="btn btn-outline md:btn-lg w-full md:w-56">Mes offres</button>
          <Cta className="md:btn-lg mt-2 md:mt-0" />
        </div>
      </div>
      <Global />
      <p className='text-center  mx-auto'>Déjà plus de 500 élèves formés à travers toute la France 😎</p>
      <div className='flex flex-col gap-12 mt-10 md:mt-20'>
        {offers}
      </div>
      
        <TitleSub title="Préparer sa formation de développeur" sub="Retrouvez l'essentiel qui vous permettra de démarrer votre formation dans les bonnes conditions." />
      <div className='mt-8 flex gap-8 max-w-5xl m-auto'>
        {courses}
      </div>
      <TitleSub title="Témoigages clients" sub="C'est un plaisir de vous aider, merci à tout ceux qui prennent le temps de témoigner ❤️" />
      <ReviewsMansonry />
      </>
  )
}
