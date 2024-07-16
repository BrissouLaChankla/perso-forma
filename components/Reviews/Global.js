

import Image from "next/image";
import reviews from '@/data/allreviews'


export default async function Global() {


    // Avis : Photo + prénom + nom + stars + commentaires + dates
    return (
        <div className="flex items-center justify-center gap-3 my-6">
            <div className="flex ">
                {
                    reviews.slice(-5).reverse().map((el, i) => <Image key={i} src={el.picture} width={40} height={40} className="border-solid border-2 border-white rounded-full -mx-1.5" alt={"Photo de profil de " + el.name.split(' ')[0]} />)
                }
            </div>
            <div>
                <div className="flex gap-0.5">
                    {
                        [...Array(5)].map((e, i) => <span key={i} className="mask mask-star-2 bg-yellow-400 w-5 h-5"></span>)
                    }
                </div>
                <span className="text-sm ms-0.5">
                    parmis 50+ avis
                </span>
            </div>
        </div>
    )
}


