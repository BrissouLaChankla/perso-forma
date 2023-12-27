'use client';

import Image from "next/image"
import Link from "next/link";
import Burger from '@/public/assets/icons/burger.svg'
import Cross from '@/public/assets/icons/cross.svg'
import styles from '@/styles/Mobile.module.scss'
import { useState } from "react";
import DropCourses from "./DropCourses";
import Cta from "./Cta";
export default function Mobile() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <label className="btn btn-circle swap swap-rotate lg:hidden z-20">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" onChange={() => setMenuOpen(!menuOpen)} />

        {/* hamburger icon */}
        <Image
          height={32}
          src={Burger}
          className="swap-off fill-current"
          alt="Menu Burger"
        />

        {/* close icon */}
        <Image
          height={32}
          src={Cross}
          className="swap-on fill-current"
          alt="Menu croix"
        />

      </label>
      {
        menuOpen && <MenuOpen />
      }
    </>

  )
}


function MenuOpen() {
  return (
    <div className={`lg:hidden ${styles.menu}`}>
      <ul className="menu rounded-box text-xl gap-6 font-medium w-full flex flex-col mt-28">
        <li>
          <Link href="/a-propos">A propos</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>

        <h2 className="ms-4 mt-8 uppercase text-sm font-light">Mes offres</h2>
        <DropCourses />
        <Cta />
      </ul>

    </div>
  )
}