import Link from "next/link"
import Image from "next/image"
import Pricing from "./Pricing"

export default function Course({ title, slug, illu, short_desc, isNew, price, promo, icons }) {
  return (
    <Link href={`/cours/${slug}`} className="w-full border relative w-1/3 items-center justify-center rounded-lg transition duration-2000 ease-in-out hover:shadow-md hover:-translate-y-1 overflow-hidden">
      <div className="h-40 relative">
      <Image src={illu}  objectFit="cover" layout="fill" alt={`Illustration du cours ${title}`} />
      </div>
      {/* <div className="badge badge-neutral badge-sm uppercase absolute inset-0 z-10 m-2 text-xs shadow-md">promo</div> */}
      <div className="p-5">
        <h3 className="font-bold m-0">{title}</h3>
        <p className="my-4 text-sm">{short_desc}</p>
        <Pricing promo={promo} price={price} />
      </div>
    </Link>
  ) 
}