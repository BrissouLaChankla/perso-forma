import { promises as fs } from 'fs';
import Image from 'next/image';

export default async function ReviewsMansonry() {
  const file = await fs.readFile(process.cwd() + '/data/allreviews.json', 'utf8');
  const reviewsData = JSON.parse(file);
  const reviews = reviewsData.map((el, i) => <Review key={i} {...el} />)

  return (
      <div className="gap-4 columns-3xs ">
        {reviews}
      </div>
  )
}


function Review({ picture, name, note, message, date }) {
  let words = name.split(' ');
  const firstname = words.shift();
  const lastname = words.join('')[0] || "X";

  return (
    <div className='bg-gray-100 rounded-lg p-6 mb-4 break-inside-avoid-column'>
      <div className='flex items-center gap-2'>
        <Image width={40} height={40} src={picture} alt={`Photo de profil de ${name}`} />
        <span className='capitalize font-medium'>{firstname + " " + lastname}.</span>
      </div>
      <div className="flex mt-3">

        {
          [...Array(note)].map((e, i) => <span key={i} className="mask mask-star-2 bg-yellow-400 w-5 h-5"></span>)
        }
      </div>
      <div className="py-3">
        <p className='opacity-80 line-clamp-8'>{message}</p>
      </div>
      <small className='opacity-60'>{date}</small>
    </div>
  )
}
