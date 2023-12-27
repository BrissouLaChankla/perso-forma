

export default function Pricing({ promo, price }) {
    return (
        <>
            {
                promo && <strong>{promo}€</strong>
            }
            <strong className={promo && `line-through opacity-30 font-medium ms-2`}>{price}€</strong>

        </>
    )
}
