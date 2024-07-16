export default function Solutions() {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 px-6 py-8 border-2 rounded-lg  flex flex-col transition duration-2000 ease-in-out hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center gap-2">
                    <span>🙏</span>
                    <h4 className="font-semibold tracking-tighter text-lg">Des challenges qui varient</h4>
                </div>
                <p className="max-w-md text-sm mt-1.5 mb-3">Fini les to-do list qu'on ne montrera même pas aux recruteurs, ici vous verrez des projets intéressants qui vous feront sortir du lot.</p>
                <img src="assets/courses/functions.png" className="h-48 w-full object-cover mt-auto rounded-lg" alt="" />
            </div>
            <div className="p-6 border-2 rounded-lg  flex flex-col transition duration-2000 ease-in-out hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center gap-2">
                    <span>🙏</span>
                    <h4 className="font-semibold tracking-tighter text-lg">Un package complet</h4>
                </div>
                <p className="max-w-md text-sm mt-1.5 mb-3">Chacun de mes exercices s'accompagne de maquette, correction, code-source et version en ligne.</p>
                <img src="assets/courses/functions.png" className="h-48 w-full object-cover mt-auto rounded-lg" alt="" />
            </div>
            <div className="p-6 border-2 rounded-lg  flex flex-col transition duration-2000 ease-in-out hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center gap-2">
                    <span>🙏</span>
                    <h4 className="font-semibold tracking-tighter text-lg">Mon accompagnement</h4>
                </div>
                <p className="max-w-md text-sm mt-1.5 mb-3">Je reste à votre disposition. Vous aurez mon discord pour discuter et me poser toutes vos questions !</p>
                <img src="assets/courses/functions.png" className="h-48 w-full object-cover mt-auto rounded-lg" alt="" />
            </div>
            <div className="col-span-2 p-6 border-2 rounded-lg  flex flex-col transition duration-2000 ease-in-out hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center gap-2">
                    <span>🙏</span>
                    <h4 className="font-semibold tracking-tighter text-lg">De la pratique pour tous</h4>
                </div>
                <p className="max-w-md text-sm mt-1.5 mb-3">Il n'y a qu'en pratiquant qu'on apprend. Je me consacre à la création d'exercices complets Javascript, qu'importe votre niveau.</p>
                <img src="assets/courses/functions.png" className="h-48 w-full object-cover mt-auto rounded-lg" alt="" />
            </div>

        </div>
    )
}
