import Link from "next/link"
import Image from "next/image"
import All from '@/public/assets/icons/all.svg'
import Free from '@/public/assets/icons/free.svg'
import Premium from '@/public/assets/icons/premium.svg'

export default function DropCourses() {
    return (
        <>
            <li>
                <Link className="text-base opacity-90" href="">
                    <Image
                        width={20}
                        src={All}
                        alt="Icon all"
                        className="me-2"
                    />
                    Mes ressources gratuits</Link>
            </li>
            <li>
                <Link className="text-base opacity-90" href="">
                    <Image
                        width={20}
                        src={Premium}
                        alt="Icon premium"
                        className="me-2"
                    />
                    Mes cours premium
                </Link>
            </li>
            <li>
                <Link className="text-base opacity-90" href="">
                    <Image
                        width={20}
                        src={Free}
                        alt="Icon free"
                        className="me-2"
                    />
                    Mes offres premium
                </Link>
            </li>
        </>
    )
}
