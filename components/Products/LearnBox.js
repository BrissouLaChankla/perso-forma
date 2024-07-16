'use client';

import Image from "next/image"
export default function LearnBox({ icon, title, description, index, illu }) {
    const createMarkup = () => {
        return { __html: description };
    };

    return (
        <div>
            <div className="h-full w-full border rounded-lg transition  duration-2000 ease-in-out hover:shadow-md hover:-translate-y-1 overflow-hidden p-6 text-left flex flex-col items-start justify-between">
                <div>
                    <Image src={`/assets/icons/course/${icon}`} height={50} width={50} />
                    <h3 className="font-bold mt-5">{title}</h3>
                    <p className="mt-3 text-sm line-clamp-5" dangerouslySetInnerHTML={createMarkup()}></p>
                </div>

                <button className="btn btn-sm btn-outline mt-5 text-xs" onClick={() => document.getElementById(`learning_modal_${index}`).showModal()}>En savoir plus</button>
            </div>

            <dialog id={`learning_modal_${index}`} className="modal">
                <div className="modal-box text-left max-w-5xl w-2/3 grid grid-cols-4 gap-6 flex items-center">
                    <div className="col-span-1 relative h-full">
                    <Image src={illu} fill style={{objectFit:"cover"}} />
                    </div>
                    <div className="col-span-3">

                    <h3 className="font-bold text-3xl">{title}</h3>
                    <p className="py-4" dangerouslySetInnerHTML={createMarkup()}></p>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>

    )
}
