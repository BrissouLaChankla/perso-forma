import Image from "next/image"
import Link from "next/link"


export default function Footer() {
    return (
        <div className="mt-40">
            <div className="flex justify-evenly items-center max-w-screen-lg m-auto p-4  ">
                <Image src="/assets/partners/mediaschool.jpg" className="grayscale hover:grayscale-0 transition w-1/4 md:w-36" width={180} height={180} alt="Logo Mediaschool" />
                <Image src="/assets/partners/capsule.png" className="grayscale hover:grayscale-0 transition w-1/4 md:w-36" width={180} height={180} alt="Logo Bootcamp La Capsule" />
                <Image src="/assets/partners/supdeweb.png" className="grayscale hover:grayscale-0 transition w-1/4 md:w-36" width={180} height={180} alt="Logo Supdeweb" />
            </div>
            <footer className="border-t">
                <div className="footer p-10 max-w-screen-lg m-auto">
                    <aside>
                        <Image src="/assets/head.svg" width={45} height={45} alt="Illustration tête Brice Eliasse" />
                        <strong className="text-base mt-3">Brice Eliasse</strong>
                        <p className="text-base opacity-70 my-2">Formateur & Développeur Web</p>
                        <small className="opacity-60 text-xs">Copyright © {new Date().getFullYear()} Brice Eliasse. <br />
                            Tous droits réservés.</small>
                    </aside>
                    <nav>
                        <header className="footer-title">Menu</header>
                        <Link href="/" className="d"></Link>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Bootcamps</header>
                        <a className="link link-hover">La Capsule</a>
                        <a className="link link-hover">Le Wagon</a>
                        <a className="link link-hover">Ironhack</a>
                        <a className="link link-hover">Wild Code School</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    )
}



