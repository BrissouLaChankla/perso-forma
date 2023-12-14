
export default function TitleSub({title, sub}) {
  return (
    <div className="text-center mb-8 md:mb-16 mt-12 md:mt-20">
    <h2 className='text-4xl md:text-5xl font-bold mb-6'>{title}</h2>
    <p className='md:text-xl opacity-80'>{sub}</p>
  </div>
  )
}
