import Link from 'next/link';

export default function Subnav({title, promo, price}) {
    return (
        <div className="py-2 bg-stone-100 border-b px-6 lg:px-12 flex justify-between items-center fixed top-0 left-0 mt-[77px] z-20 w-full">
            <span><span className='font-medium'>{title}</span> <span className='text-sm opacity-80 ms-1'>| {promo || price}€</span></span>
            <Link href="/">
                <button className="btn btn-neutral bg-white btn-outline btn-sm h-10">
                    Acheter la formation
                </button>
            </Link>
        </div>
    )
}
