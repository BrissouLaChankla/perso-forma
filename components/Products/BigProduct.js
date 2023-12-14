import Image from "next/image"
import Link from "next/link";
export default function BigProduct({ title, description, isNew, price, icons, slug, cta, illu }) {

    const createMarkup = () => {
        return { __html: description };
    };
    
    return (
        <div className="card lg:card-side bg-gray-50 hover:shadow-md hover:-translate-y-0.5 ps-2 pt-2 md:ps-8 md:pt-8  transition duration-200 ">
            <div className="card-body lg:w-8/12 mb-6">
                {
                    isNew &&
                    <div className="badge badge-error text-white p-4 font-bold uppercase md:text-sm badge-sm md:badge-lg">Nouveau</div>
                }
                <h2 className="card-title text-2xl md:text-4xl font-bold my-3 md:my-6">{title}</h2>
                <p className="md:text-xl opacity-90 text-base" dangerouslySetInnerHTML={createMarkup()}></p>
                <span className="my-4 text-xl font-bold">{price}€</span>
                <div className="card-actions items-center gap-4 justify-center md:justify-start">
                    <Link href={`/courses/${slug}`} className="btn btn-neutral w-full md:w-64 text-white md md:btn-lg text-base">{cta}</Link>
                    <div className="flex gap-4 opacity-90">
                        {
                            icons.map((el, i) => <Image key={i} src={el.path} width={30} height={30} alt={`Logo ${el.name}`} />)
                        }
                        
                    </div>
                </div>
            </div>
            <figure className="lg:w-4/12 relative">
            <Image  src={`/assets/courses/${illu}`} fill={true} alt={`Illustration ${title}`} />
            </figure>

        </div>
    )
}
