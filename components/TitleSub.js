
export default function TitleSub({ title, sub }) {
  return (
    <div className="text-center mb-8 md:mb-12 mt-12 md:mt-24">
      <h2>{title}</h2>
      <p className='md:text-xl  mx-auto'>{sub}</p>
    </div>
  )
}
