import TextMorph from '@/components/TextMorph'
import Image from 'next/image'
import Cta from '@/components/Menu/Cta'
import Global from '@/components/Reviews/Global'
import BigProduct from '@/components/Products/BigProduct'
import { promises as fs } from 'fs';
import ReviewsMansonry from '@/components/Reviews/Masonry'
import TitleSub from '@/components/TitleSub';


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/data/courses.json', 'utf8');
  const coursesData = JSON.parse(file);
  // Que les 2 premières du JSON
  const courses = coursesData.slice(0, 2).map((el, i) => <BigProduct key={i} {...el} />)

  return (
    <>
      <div className='text-center flex flex-col items-center'>
        <div className='relative w-full flex justify-center'>
        <Image src="/assets/logo.svg"
          width={425}
          height={425}
          className='z-10 w-1/2 md:w-2/5'
          alt="Illustration de Brice Eliasse"
        />
        <TextMorph />
          
        </div>
        <h1 className='max-w-5xl'>
          Apprenez les Bases du Développement Web
        </h1>
        <p className='mt-5 md:mt-5 opacity-60 md:text-2xl max-w-5xl'>Vous allez commencer une formation pour devenir développeur web mais vous redoutez le challenge ? Que ce soit études supérieure ou Bootcamp, je vais vous aider.</p>
        <div className="flex flex-col md:flex-row gap-x-2 mt-5 w-full justify-center">
          <button className="btn btn-outline md:btn-lg w-full md:w-56">Mes cours</button>
          <Cta className="md:btn-lg mt-2 md:mt-0" />
        </div>
        {/* <p className='mt-12 opacity-60 text-2xl'>Apprenez à faire un site internet sans avoir l'impression qu'on vous parle 中国人 <br /> Cours puis exercices, on va à l'essentiel</p> */}
      </div>
      <Global />
      <p className='opacity-80 text-center'>Déjà plus de 500 élèves formés à travers toute la France 😎</p>
      <div className='flex flex-col gap-12 mt-10 md:mt-20'>
        {courses}
      </div>

      <TitleSub title="Témoigages clients" sub="C'est un plaisir de vous aider, merci à tout ceux qui prennent le temps de témoigner ❤️" />
      <ReviewsMansonry />
      </>
  )
}
