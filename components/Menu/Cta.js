import Link from "next/link"

export default function Cta({className}) {
    return (
        <Link href="/" className={`btn btn-neutral text-white ${className}`}>
            Préparation Bootcamp
            <div className="badge badge-ghost">-60%</div>
        </Link>
    )
}
