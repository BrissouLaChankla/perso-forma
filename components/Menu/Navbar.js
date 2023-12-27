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
                    {/* <li>
                        <details>
                            <summary>
                                Mes offres
                            </summary>
                            <ul className="p-2 bg-base-100 w-64 rounded-t-none">
                                <DropCourses />
                            </ul>
                        </details>
                    </li> */}
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button">Mes offres 
                        <Image src="/assets/icons/chevron.svg" alt="chevron bas" className="rotate-90 opacity-80" width={12} height={12}/>
                        </div>
                        <ul tabIndex={0} className="ms-0 dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-72">
                            <DropCourses />
                        </ul>
                    </li>

                    <li><Link href="/a-propos">A propos</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
                <Cta />

            </div>
            <Mobile />
        </div>
    )
}
