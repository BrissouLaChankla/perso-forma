import Link from "next/link"

export default function Cta() {
    return (
        <Link href="/" className="btn btn-neutral text-white">
            Acheter la formation
            <div className="badge badge-ghost">-60%</div>
        </Link>
    )
}
