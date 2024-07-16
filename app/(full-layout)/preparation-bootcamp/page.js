
import ForWho from '@/components/Products/ForWho';
import Signature from '@/components/Products/Signature';
import PriceBanner from '@/components/Products/PriceBanner';
import Underlined from '@/components/ui/Underlined';

export default function PreparationBootcamp() {
    return (
        <div className='text-center flex flex-col items-center py-16'>
            <div className="badge badge-error text-white p-4 font-bold md:text-sm badge-sm md:badge-lg">49€ | Offre unique</div>
            <h1 className='mt-4 max-w-screen-md'>Débloquer instantanément <Underlined word="tous mes exercices" /> </h1>
            <p className='md:text-xl opacity-90 text-base max-w-xl mt-5'>En payant une seule fois vous accédez à vie aux codes sources, maquettes et version en ligne de tous mes exos.</p>

            <a href="https://buy.stripe.com/test_5kA9Ed7uwaPhdRmaEE" className="btn btn-neutral btn-lg text-white mt-7">

                {/* <a href="https://buy.stripe.com/6oEbKo33Jdz15lS9AC" className="btn btn-neutral btn-lg text-white mt-7"> */}
                Obtenir un Accès Premium
            </a>
            <PriceBanner />
            <ForWho />
            <Signature />

        </div>
    )
}