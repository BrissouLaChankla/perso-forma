import YouTubeVideo from '@/components/Products/YoutubeVideo';
import Global from '@/components/Reviews/Global';
import TitleSub from '@/components/TitleSub';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';
import PriceBanner from '@/components/Products/PriceBanner';
import ForWho from '@/components/Products/ForWho';
import Signature from '@/components/Products/Signature';
import Marquee from '@/components/Reviews/Marquee';
import Course from '@/components/Products/Course';
import LearnBox from '@/components/Products/LearnBox';

export default async function CoursePage({ params }) {
  const filePath = path.join(process.cwd(), 'data', 'courses.json');
  const coursesFetch = await fs.readFile(filePath, 'utf8');
  const coursesData = JSON.parse(coursesFetch);
  const course = coursesData.find(course => course.slug === params?.slug);
  const otherCourses = coursesData.flatMap((el, i) => el.slug === params.slug ? [] : <Course key={i} {...el} />)
  const learnings = course.learnings.map((el, i) => <LearnBox key={i} index={i} {...el} />)

  if (!course) {
    return null;
  }

  const { title, description, presentation_vid, price, promo } = course;
  return (
    <>
      {/* Subnav */}
      <div className="py-2 bg-stone-100 border-b px-6 lg:px-12 flex justify-between items-center fixed top-0 left-0 mt-[77px] z-20 w-full">
        <span><span className='font-medium'>{title}</span> <span className='text-sm opacity-80 ms-1'>| {promo || price}€</span></span>
        <Link href="/">
          <button className="btn btn-neutral bg-white btn-outline btn-sm h-10">

            Acheter la formation
          </button>
        </Link>
      </div>
      <div className='text-center flex flex-col items-center mt-14'>
        <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f1f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1f_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <h1>
          {title}
        </h1>
        <p className='my-5 opacity-60 md:text-xl '>{description}</p>
        <div className="mt-2 mockup-browser border bg-base-300 w-full max-w-2xl shadow-xl">
          <div className="mockup-browser-toolbar">
          </div>
          <div className="flex justify-center bg-base-200"><YouTubeVideo url={presentation_vid} /></div>
        </div>
        <div className="mt-2" >
          <Global />
        </div>

        <TitleSub title="Ce que vous allez apprendre durant cette formation" sub="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi sed, aliq." />

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12'>
          {learnings}
        </div>

        <PriceBanner />
        <ForWho />


        <Signature />
        <TitleSub title="Jetez un œil à mes autres cours" sub="Ils sont essentiels pour maîtriser les bases de la programmation web" />
        <div className="flex justify-center gap-3 md:gap-6">
          {otherCourses}
        </div>
      </div>
        <Marquee />
    </>

  )
}