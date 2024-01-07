import Image from "next/image";

export default function Signature() {
  return (
    <div className="w-full flex-col md:flex-row flex gap-4 mt-28 items-center justify-center">
      <div className="">
        <Image src="/assets/logo.svg" width={200} height={200} className="w-40" />
      </div>
      <div className="text-left md:w-6/12 px-6">
        <h3>Crée par Brice Eliasse, Formateur & Développeur</h3>
        <p className="mt-2">J'aide les développeurs web à faire leurs premiers pas. J'enseigne en école supérieure, en Bootcamp et désormais en ligne pour votre plus grand plasir ! </p>
      </div>
      <div>
        <Image src="/assets/badge.png" width={100} height={100} className="w-16 hidden md:block" />
      </div>

    </div>
  )
}
