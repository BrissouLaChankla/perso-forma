import { promises as fs } from 'fs';
import Image from 'next/image';
import TitleSub from '../TitleSub';

export default async function Marquee() {
    const file = await fs.readFile(process.cwd() + '/data/allreviews.json', 'utf8');
    const reviewsData = JSON.parse(file);
    const reviews = reviewsData.map((el, i) => <Review key={i} {...el} />)
    return (
        <div className=' flex flex-col items-center md:mt-24 '>
            <div className='w-screen relative' style={{backgroundImage: 'linear-gradient(to bottom, white, rgba(255, 255, 255, 0) 15%)'}}>
                <div className='mt-10'> 
                <TitleSub title="Témoignages clients" sub="C'est un plaisir de vous aider, merci à tout ceux qui prennent le temps de témoigner ❤️" />
                </div>
                <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative flex gap-10 overflow-hidden">
                    <div className="animate-marquee pb-5 flex min-w-full shrink-0 items-center justify-around gap-10">
                        {reviews.slice(0, 10)}
                    </div>
                    <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10">
                        {reviews.slice(0, 10)}
                    </div>
                </div>

                <div className="relative  flex  overflow-hidden -mt-4 ">
                    <div className="animate-marquee py-5 flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse] me-10">
                        {reviews.slice(10, 21)}
                    </div>
                    <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
                        {reviews.slice(10, 21)}
                    </div>
                </div>
            </div>

        </div>
    )
}



function Review({ picture, name, note, message, date }) {
    let words = name.split(' ');
    const firstname = words.shift();
    const lastname = words.join('')[0] || "X";

    return (
        <div className='w-64 h-60 rounded-lg bg-stone-50  p-6 text-left flex flex-col '>
            <div className='flex items-center gap-2'>
                <Image width={30} height={30} src={picture} alt={`Photo de profil de ${name}`} />
                <span className='capitalize font-medium text-sm'>{firstname + " " + lastname}.</span>
            </div>
            <div className="flex mt-3">
                {
                    [...Array(note)].map((e, i) => <span key={i} className="mask mask-star-2 bg-yellow-400 w-4 h-4"></span>)
                }
            </div>
            <div className="py-3">
                <p className='text-sm line-clamp-4 '>{message}</p>
            </div>
            <small className='opacity-60 mt-auto'>{date}</small>
        </div>
    )
}
