import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='text-center flex flex-col items-center'>
          <Image src="/assets/logo.svg"
            width={425}
            height={425}
            alt="Illustration de Brice Eliasse"
          />
      <h1 className='text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl '>
        Apprenez les Bases <br />du Développement Web 
      </h1>
      </div>
     
    </main>
  )
}
