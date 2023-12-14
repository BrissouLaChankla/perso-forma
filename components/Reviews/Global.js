

async function getData() {
    const res = await fetch('https://maps.googleapis.com/maps/api/place/details/json?&place_id=ChIJPTn1VkErzBIRoSNzaF6pN0A&key=' + process.env.GOOGLE_API_KEY);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

import Image from "next/image";

export default async function Global() {
    const data = await getData();
    const reviews = data.result.reviews;

    // Avis : Photo + prénom + nom + stars + commentaires + dates
    return (
        <div className="flex items-center gap-3 my-6">
            <div className="flex ">
                {
                    reviews.map((el, i) => <Image key={i} src={el.profile_photo_url} width={40} height={40} className="border-solid border-2 border-white rounded-full -mx-1.5" alt={"Photo de profil de " + el.author_name.split(' ')[0]} />)
                }
            </div>
            <div>
                <div className="flex gap-0.5">
                    {
                        [...Array(5)].map((e, i) => <span key={i} className="mask mask-star-2 bg-yellow-400 w-5 h-5"></span>)
                    }
                </div>
                <span className="text-sm ms-0.5">
                    parmis {data.result.user_ratings_total} avis
                </span>
            </div>
        </div>
    )
}


