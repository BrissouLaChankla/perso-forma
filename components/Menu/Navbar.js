import Image from "next/image"
import Link from "next/link"

import Mobile from "./Mobile"
import DropCourses from "./DropCourses"
import Cta from "./Cta"

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 px-6 lg:px-12 sticky top-0 border-b z-30">
            <div className="max-w-screen-lg w-full m-auto ">

                <div className="flex-1">
                    <Link href="/" className="text-xl flex items-center gap-4 font-extrabold leading-none ">
                        <img
                            height={60}
                            className="h-14"
                            src={"/assets/head.svg"}
                            alt="Tête de Brice Eliasse"
                        />
                        Osez <br /> Coder
                    </Link>
                </div>
                <div className="flex-none hidden lg:flex items-center">
                    <ul className="menu menu-horizontal gap-4 text-base me-4 font-medium">

                        <li className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button">Mes cours
                                <Image src="/assets/icons/chevron.svg" alt="chevron bas" className="rotate-90 opacity-80" width={12} height={12} />
                            </div>
                            <ul tabIndex={0} className="ms-0 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-72">
                                <DropCourses />
                            </ul>
                        </li>

                        <li><Link href="/a-propos">A propos</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                    <Cta />
                    <Link href="/login">
                        <Image src="/assets/icons/login.svg" width={20} height={20} className="ms-4" />
                    </Link>
                </div>
                <Mobile />
            </div>

        </div>
    )
}
