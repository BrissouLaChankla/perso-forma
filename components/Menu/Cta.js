import Link from "next/link"

export default function Cta({ className, wording = "Obtenir un accès" }) {
    return (
        <Link href="/preparation-bootcamp" className={`btn btn-neutral text-white ${className}`}>
            {wording}
            <div className="badge badge-ghost">49€</div>
        </Link>
    )
}
