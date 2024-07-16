import YouTubeVideo from '@/components/Products/YoutubeVideo';
import Global from '@/components/Reviews/Global';
import TitleSub from '@/components/TitleSub';
import { promises as fs } from 'fs';
import path from 'path';

import Marquee from '@/components/Reviews/Marquee';
import Course from '@/components/Products/Course';
import LearnBox from '@/components/Products/LearnBox';
import Subnav from '@/components/Menu/Subnav'
import StartCourse from '@/components/StartCourse';
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
  {/* <Subnav title={title} promo={promo} price={price} />   */}
      <div className='text-center flex flex-col items-center'>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f1f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1f_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" style={{zIndex:-1}}></div>
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

        <TitleSub title="Ce que vous allez apprendre durant ce cours" sub="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus commodi sed, aliq." />

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12'>
          {learnings}
        </div>

<StartCourse />
      


        <TitleSub title="Jetez un œil à mes autres cours" sub="Ils sont essentiels pour maîtriser les bases de la programmation web" />
        <div className="flex justify-center gap-3 md:gap-6">
          {otherCourses}
        </div>
      </div>
        <Marquee />
    </>

  )
}