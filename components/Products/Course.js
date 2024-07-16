import Link from "next/link"
import Image from "next/image"

export default function Course({ title, slug, illu, short_desc, free = false }) {
  return (
    <Link href={`/cours/${slug}`} className="border relative w-1/3 items-center justify-center rounded-lg transition duration-2000 ease-in-out hover:shadow-md hover:-translate-y-1 overflow-hidden">
      <div className="h-40 relative">
        {
          !free &&
          <div className="badge badge-neutral text-white py-2.5 font-bold badge-sm uppercase text-xs shadow-md absolute z-10 top-1.5 right-1.5">Premium</div>
        }
        <Image src={illu} style={{ objectFit: "cover" }} fill alt={`Illustration du cours ${title}`} />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-bold m-0">{title}</h3>
          {
            !free &&
            <Image src="/assets/icons/lock.svg" width={12} height={12} />
          }
        </div>

        <p className="my-4 text-sm">{short_desc}</p>
      </div>
    </Link>
  )
}