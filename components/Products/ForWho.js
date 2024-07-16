import TitleSub from "../TitleSub";

export default function ForWho() {

    return (
        <div className="max-w-screen-lg">
            <TitleSub title="A qui s'adresse cette formation ?" sub="A tous ceux préparent leur rentrée en école ou en Bootcamp de développement web, mais aussi à ceux qui veulent (ré)apprendre les bases du code !" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-14">
                <div className="lg:border-r-2 ">
                    <div className="text-4xl">
                        👨‍💻
                    </div>
                    <h3 className="text-xl font-bold mt-4">Préparant un Bootcamp</h3>
                    <p className="mt-3">Renforcer leurs connaissances avant une formation intensive.</p>
                </div>
                <div className="lg:border-r-2">
                    <div className="text-4xl">
                        🐣
                    </div>
                    <h3 className="text-xl font-bold mt-4">Débutants en Dev. Web</h3>
                    <p className="mt-3">Commencer leur parcours avec des bases solides.</p>
                </div>
                <div className="lg:border-r-2">
                    <div className="text-4xl">
                        👩‍💼
                    </div>
                    <h3 className="text-xl font-bold mt-4">Pro. en Reconversion</h3>
                    <p className="mt-3">Acquérir rapidement des compétences techniques.</p>
                </div>
                <div>
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
