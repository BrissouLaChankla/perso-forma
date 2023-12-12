import Image from "next/image"
import Link from "next/link"
import HeadLogo from '@/public/assets/head.svg'

import Mobile from "./Mobile"
import DropCourses from "./DropCourses"
import Cta from "./Cta"

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 px-6 lg:px-12 sticky top-0 border-b z-20">
            <div className="flex-1">
                <Link href="/" className="text-xl flex items-center gap-6 font-bold z-20 ">
                    <Image
                        height={60}
                        priority
                        src={HeadLogo}
                        alt="Tête de Brice Eliasse"
                    />
                    Brice Eliasse
                </Link>
            </div>
            <div className="flex-none hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 text-base me-4 font-medium">
                    <li>
                        <details>
                            <summary>
                                Mes cours
                            </summary>
                            <ul className="p-2 bg-base-100 w-64 rounded-t-none">
                                <DropCourses />
                            </ul>
                        </details>
                    </li>
                    <li><Link href="">A propos</Link></li>
                    <li><Link href="">Contact</Link></li>

                </ul>
               <Cta />

            </div>
            <Mobile />
        </div>
    )
}
