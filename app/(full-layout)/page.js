import TextMorph from '@/components/TextMorph'
import Image from 'next/image'
import Cta from '@/components/Menu/Cta'
import Global from '@/components/Reviews/Global'
import BigProduct from '@/components/Products/BigProduct'
import { promises as fs } from 'fs';
import path from 'path';
import ReviewsMansonry from '@/components/Reviews/Masonry'
import YouTubeVideo from '@/components/Products/YoutubeVideo';
import TitleSub from '@/components/TitleSub';
import Course from '@/components/Products/Course'
import slugify from '@/utils/slugify';
import Faq from '@/components/Faq'
import Link from 'next/link'
import Lacunes from '@/components/Lacunes'
import Solutions from '@/components/Solutions'
import Circled from '@/components/ui/Circled'
import Demos from '@/components/Demos'
import Marquee from '@/components/Reviews/Marquee'
import Underlined from '@/components/ui/Underlined'


const advantages = [
  {
    id: 1,
    icon: "⚙️",
    title: "Discussions",
    text: "Keep workflows efficient with tools that give teams visibility throughout the process."
  },
  {
    id: 2,
    icon: "⚙️",
    title: "Discussions",
    text: "Keep workflows efficient with tools that give teams visibility throughout the process."
  },
  {
    id: 3,
    icon: "⚙️",
    title: "Discussions",
    text: "Keep workflows efficient with tools that give teams visibility throughout the process."
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Discussions",
    text: "Keep workflows efficient with tools that give teams visibility throughout the process."
  },
  {
    id: 5,
    icon: "⚙️",
    title: "Discussions",
    text: "Keep workflows efficient with tools that give teams visibility throughout the process."
  },
  {
    id: 6,
    icon: "⚙️",
    title: "Discussions",
    text: "Keep workflows efficient with tools that give teams visibility throughout the process."
  },
]

const faq = [
  {
    question: "Quels services proposez-vous exactement ?",
    answer: "Je propose une variété de services pour préparer et accompagner les étudiants avant et pendant leur bootcamp en développement web. Cela inclut des séances de coaching individuelles, des programmes de préparation, des ressources d'apprentissage en ligne, et un soutien personnalisé tout au long de votre parcours d'apprentissage."
  },
  {
    question: "Quelle est l'utilité d'une préparation avant un bootcamp ?",
    answer: "La préparation avant un bootcamp est cruciale pour solidifier vos bases en programmation, vous familiariser avec les outils et les langages que vous utiliserez, et vous mettre dans les meilleures conditions pour tirer le maximum de l'expérience intensive que représente un bootcamp."
  },
  {
    question: "Proposez-vous un soutien après le bootcamp ?",
    answer: "Oui, je propose un soutien post-bootcamp pour vous aider dans votre transition vers le monde professionnel, que ce soit pour la recherche d'emploi, la création de votre portfolio, ou des conseils de carrière."
  },
  {
    question: "Comment garantissez-vous la qualité de vos services ?",
    answer: "Ma méthodologie s'appuie sur mon expérience professionnelle en développement web et en enseignement. Je m'engage à fournir un contenu pédagogique de qualité, des retours constructifs, et un suivi personnalisé pour garantir la satisfaction de mes étudiants."
  }
];

export default async function Home() {


  const coursesPath = path.join(process.cwd(), 'data', 'courses.json');
  const coursesFetch = await fs.readFile(coursesPath, 'utf8');
  const coursesData = JSON.parse(coursesFetch);
  const courses = coursesData.map((el, i) => <Course key={i} {...el} />)


  return (
    <>
      <div className='text-center flex flex-col items-center -mt-8 section'>
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
          Deviens développeur Full-stack Javascript <Underlined word="par la pratique" />
        </h1>
        <p className='mt-5 md:mt-7  md:text-lg max-w-xl'>Deviens un vrai développeur web en {new Date().getUTCFullYear()} en accédant à mes exercices sur-mesure, utilisées par les meilleures écoles.</p>
        <div className="flex flex-col md:flex-row gap-x-2 mt-5 md:mt-7 w-full justify-center">
          <Cta className="md:btn-lg mt-2 md:mt-0" />
        </div>
        <Global />
        <div className="mt-16 mockup-browser border bg-base-300 w-full  shadow-xl">
          <div className="mockup-browser-toolbar">
          </div>
          <div className="flex justify-center bg-base-200">
            <YouTubeVideo url="https://www.youtube.com/embed/K35qAXqjUR4" />
          </div>
        </div>
        <div className="flex gap-4 items-center justify-between mt-14">
          <div className='text-center'>
            <span className='text-4xl font-semibold'>476K</span>
            <p className='mt-2 text-sm'>Assets packed with power beyond your imagination.</p>
          </div>
          <span className='w-[2px] h-10 bg-black/20'></span>
          <div className='text-center'>
            <span className='text-4xl font-semibold'>476K</span>
            <p className='mt-2 text-sm'>Assets packed with power beyond your imagination.</p>
          </div>
          <span className='w-[2px] h-10 bg-black/20'></span>
          <div className='text-center'>
            <span className='text-4xl font-semibold'>476K</span>
            <p className='mt-2 text-sm'>Assets packed with power beyond your imagination.</p>
          </div>
          <span className='w-[2px] h-10 bg-black/20'></span>
          <div className='text-center'>
            <span className='text-4xl font-semibold'>476K</span>
            <p className='mt-2 text-sm'>Assets packed with power beyond your imagination.</p>
          </div>
        </div>
      </div>


      <div className="bg-gray-50 w-full mt-20">
        <div className="py-20 section">
          <h2 className='text-center'>Apprendre à coder c'est très cool <Circled word="MAIS" /></h2>
          <p className='md:text-xl text-center'>Vous allez forcément faire ces bêtises :</p>
          <div className="mt-14">
            <Lacunes />
          </div>
        </div>
      </div>




      <div className='section py-20'>
        <TitleSub title="Et quelles solutions que je propose ?" sub="j'allais y venir..." />
        <div className="mt-14">
          <Solutions />
        </div>
      </div>


      <div className="bg-neutral-800 w-full">
        <div className="py-20 max-w-screen-xl m-auto">
          <Demos />
          <div className="grid grid-cols-3 mt-40 gap-14">
            {
              advantages.map(advantage => <div key={advantage.id} >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{advantage.icon}</span>
                  <h4 className="font-semibold tracking-tighter  text-white">{advantage.title}</h4>
                </div>
                <p className="text-neutral-500 text-sm" >{advantage.text}</p>
                {/* <p className="my-2">Ils doivent contracter du savoir normalement acquis en plusieurs années, en seulement quelques semaines. Si vous accumulez du retard, vous êtes cuit.</p> */}
              </div>)
            }
          </div>
        </div >
      </div >


      <div className='section py-20'>
        <TitleSub title="Alors, qu'est-ce que vous attendez ?" sub="Une offre unique et à vie qui vous permettra d'être un vrai bon dev" />

        <div className="mt-14">
          <BigProduct id="prod_Pm0X7hDfJ5R568" />
        </div>

        <div className='flex flex-col gap-2 mt-20 max-w-screen-md px-10 m-auto'>
          {faq.map((el, i) => <div key={i} className="collapse collapse-arrow bg-neutral-100">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-bold tracking-tight">{el.question}</div>
            <div className="collapse-content">
              <p className='text-sm'>{el.answer}</p>
            </div>
          </div>)}
        </div>
        <Marquee />


        <div className="w-full mt-20">
          <div className="py-20 section">
            <img
              height={60}
              className="h-20 m-auto"
              src={"/assets/head.svg"}
              alt="Tête de Brice Eliasse"
            />
            <h2 className='text-center mt-8'>Démarrez dés <Underlined word="maintenant" /></h2>
            <p className='text-lg max-w-screen-md m-auto text-center'>Arrêtez de procrastiner et passez à l'action. Démarrez l'aventure maintenant en découvrant mes meilleurs exercices.</p>
            <div className="mt-10 text-center">
              <Cta wording="Démarrer l'aventure" />
            </div>
            <div className="flex justify-center  mt-14">
              <div className="flex gap-4 xfade px-4">

                <div className="border bg-gray-50 h-16 w-16 rounded-lg grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-8 w-8 opacity-60'>
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1z"></path>
                  </svg>
                </div>
                <div className="border bg-gray-50 h-16 w-16 rounded-lg grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='h-8 w-8 opacity-60'>
                    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
                  </svg>

                </div>
                <div className="border bg-gray-50 h-16 w-16 rounded-lg grid place-items-center">
                  <svg
                    className='h-8 w-8 opacity-60'
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"></path>
                  </svg>
                </div>
                <div className="border bg-gray-50 h-16 w-16 rounded-lg grid place-items-center">
                  <svg
                    className='h-8 w-8 opacity-60'
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526l-.63-.156C2.692 20.328 0 18.318 0 15.995s2.693-4.333 7.38-5.521l.63-.156.177.625a31.42 31.42 0 001.818 4.771l.135.281-.135.286a31.047 31.047 0 00-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063a33.28 33.28 0 011.578-4.063 32.958 32.958 0 01-1.578-4.063zm16.901 9.74l-.177-.625a31.163 31.163 0 00-1.818-4.766l-.135-.286.135-.286a31.047 31.047 0 001.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677a32.524 32.524 0 011.578 4.063c3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063a33.663 33.663 0 01-1.578 4.063zM7.078 11.927l-.177-.625C5.583 6.656 5.984 3.323 8 2.161c1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464a31.458 31.458 0 00-3.229 3.958l-.182.255-.313.026a31.612 31.612 0 00-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005a33.343 33.343 0 014.313-.672 32.828 32.828 0 012.734-3.391c-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464a31.458 31.458 0 003.229-3.958l.177-.255.313-.031a30.668 30.668 0 005.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135a3.095 3.095 0 01-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005a32.644 32.644 0 01-4.313.667 32.886 32.886 0 01-2.734 3.396zm7.99-13.802l-.63-.161a31.993 31.993 0 00-5.052-.813l-.313-.026-.177-.255a31.458 31.458 0 00-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276a33.22 33.22 0 014.313.672c.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943a34.067 34.067 0 012.734 3.391zM9.609 30.234c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255a31.458 31.458 0 003.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943a32.886 32.886 0 01-2.734-3.396 32.517 32.517 0 01-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26a39.947 39.947 0 01-1.797-2.828 39.917 39.917 0 01-1.557-2.969l-.135-.286.135-.286a40.498 40.498 0 013.354-5.797l.182-.26.313-.026a39.962 39.962 0 016.708 0l.313.026.182.26a40.077 40.077 0 013.354 5.797l.135.286-.135.286a39.62 39.62 0 01-3.354 5.797l-.182.26-.313.026a40.483 40.483 0 01-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0a39.03 39.03 0 002.927-5.063 37.53 37.53 0 00-2.932-5.063 37.881 37.881 0 00-5.854 0 37.302 37.302 0 00-2.932 5.063 38.624 38.624 0 002.932 5.063z"></path>
                  </svg>
                </div>
                <div className="border bg-gray-50 h-16 w-16 rounded-lg grid place-items-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1000"
                    height="1000"
                    fill="none"
                    viewBox="0 0 1000 1000"
                    className='h-8 w-8 opacity-60'
                  >
                    <path
                      fill="#000"
                      d="M467.253.27c-2.15.195-8.993.879-15.151 1.367-142.034 12.804-275.074 89.43-359.336 207.204-46.92 65.484-76.93 139.764-88.27 218.443C.49 454.748 0 462.86 0 500.098s.489 45.35 4.497 72.814C31.672 760.666 165.298 918.414 346.53 976.861c32.453 10.458 66.666 17.592 105.572 21.893 15.151 1.666 80.645 1.666 95.796 0 67.156-7.428 124.047-24.044 180.157-52.681 8.602-4.398 10.264-5.571 9.091-6.548-.782-.586-37.439-49.748-81.428-109.173l-79.96-107.999-100.196-148.268c-55.132-81.513-100.489-148.17-100.88-148.17-.391-.097-.782 65.778-.977 146.215-.293 140.84-.391 146.509-2.151 149.832-2.541 4.789-4.496 6.744-8.602 8.894-3.128 1.564-5.865 1.857-20.625 1.857h-16.912l-4.496-2.835a18.27 18.27 0 01-6.549-7.134l-2.053-4.399.195-195.963.293-196.061 3.031-3.812c1.564-2.052 4.887-4.691 7.233-5.962 4.008-1.955 5.572-2.15 22.483-2.15 19.942 0 23.265.782 28.446 6.451 1.466 1.563 55.719 83.272 120.626 181.693 64.907 98.422 153.665 232.811 197.263 298.783l79.178 119.924 4.008-2.639c35.484-23.066 73.021-55.906 102.737-90.114 63.246-72.618 104.008-161.169 117.693-255.583 4.008-27.464 4.497-35.576 4.497-72.814s-.489-45.35-4.497-72.814C968.328 239.53 834.702 81.782 653.47 23.335 621.505 12.975 587.488 5.84 549.365 1.54 539.98.562 475.367-.513 467.253.27zm204.692 302.398c4.692 2.346 8.505 6.842 9.873 11.533.782 2.542.978 56.884.782 179.348l-.293 175.732-30.987-47.5-31.085-47.5V446.538c0-82.588.391-129.013.977-131.261 1.564-5.474 4.985-9.774 9.678-12.315 4.007-2.053 5.474-2.248 20.821-2.248 14.467 0 17.008.195 20.234 1.954z"
                    ></path>
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <TitleSub title="Préparer sa formation de développeur" sub="Retrouvez l'essentiel qui vous permettra de démarrer votre formation dans les meilleures conditions" />
        <div className='flex flex-col sm:flex-row gap-8 m-auto'>
          {courses}
        </div>
        <div className="text-end my-5" >
          <Link href="/cours">
            Voir tous mes cours →
          </Link>
        </div>
        <Faq /> */}
      </div>

    </>
  )
}
