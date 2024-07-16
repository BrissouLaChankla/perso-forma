import Image from "next/image"
import Link from "next/link";
import slugify from "@/utils/slugify";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function BigProduct({ id }) {
    const product = await stripe.products.retrieve(id);
    let price = await stripe.prices.list({
        product: id,
        limit: 1
    })
    price = price.data[0].unit_amount/100;


    return (
        <div className="card lg:card-side bg-stone-50 hover:shadow-md hover:-translate-y-0.5 ps-2 pt-2 md:ps-8 md:pt-8 transition duration-200 ">
            <div className="card-body p-4  lg:w-8/12 mb-6">
                <div className="badge badge-error text-white p-4 font-bold uppercase md:text-sm badge-sm md:badge-lg">Offre unique</div>
                <h2 className="card-title text-2xl md:text-4xl font-bold my-3 md:my-5">{product.name}</h2>
                <p className="md:text-xl opacity-90 text-base">{product.description}</p>
                <span className="my-4 text-xl font-bold">{price}€</span>
                <div className="card-actions items-center gap-4 justify-center md:justify-start">
                    <Link href={`/${product.metadata.slug}`} className="btn btn-neutral w-full md:w-60 text-white text-base">Découvrir l'offre</Link>
                </div>
            </div>
            <figure className="lg:w-4/12 relative">
                <Image src={product.images[0]} fill={true} alt={`Illustration ${product.name}}`} style={{"objectPosition": "top"}} />
            </figure>

        </div>
    )
}
