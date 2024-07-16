
export default function TitleSub({ title, sub }) {
  return (
    <div className="text-center">
      <h2>{title}</h2>
      <p className='md:text-xl mx-auto'>{sub}</p>
    </div>
  )
}
