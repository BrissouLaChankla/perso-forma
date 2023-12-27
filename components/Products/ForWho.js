import TitleSub from "../TitleSub";

export default function ForWho() {
    
    return (
        <div>
            <TitleSub title="A qui s'adresse cette formation ?" sub="This comprehensive template has everything you need to streamline your operations and take your business to the next level." />
            <div className="flex gap-8 text-left">
            <div className="w-1/4 md:border-r-2 ">
                    <div className="text-4xl">
                        👨‍💻
                    </div>
                    <h3 className="text-xl font-bold mt-4">Préparant un Bootcamp</h3>
                    <p className="mt-3">Renforcer leurs connaissances avant une formation intensive.</p>
                </div>
                <div className="w-1/4 md:border-r-2">
                    <div className="text-4xl">
                        🐣
                    </div>
                    <h3 className="text-xl font-bold mt-4">Débutants en Dev. Web</h3>
                    <p className="mt-3">Commencer leur parcours avec des bases solides.</p>
                </div>
                <div className="w-1/4 md:border-r-2">
                    <div className="text-4xl">
                        👩‍💼
                    </div>
                    <h3 className="text-xl font-bold mt-4">Pro. en Reconversion</h3>
                    <p className="mt-3">Acquérir rapidement des compétences techniques.</p>
                </div>
                <div className="w-1/4">
                    <div className="text-4xl">
                        🦸
                    </div>
                    <h3 className="text-xl font-bold mt-4">Autodidactes </h3>
                    <p className="mt-3">Consolider et avancer dans leurs compétences.</p>
                </div>
            </div>

        </div>
    )
}
