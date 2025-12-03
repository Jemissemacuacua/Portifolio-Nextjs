"use client";
function Sobre() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-3 py-20 sm:py-32 lg:overflow-visible lg:px-0 ">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,sky,transparent)] stroke-gray-200"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>

            <div className="mx-auto max-w-4xl">



                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-600 sm:text-4xl text-center">
                    Sobre Mim
                </h2>
                <p className="text-center py-3 font-mono text-gray-400 md:w-1/2 mx-auto">
                    Com um conjunto de habilidades que incluem full-stack development, architecture, system design e DevOps, sou um profissional completo na área de engenharia de software.
                </p>

                <div className="relative isolate overflow-hidden px-6 py-8 shadow-2xl rounded-3xl sm:px-8 md:py-12 lg:px-12 border-2 border-gray-200 bg-white">
                    <div className="space-y-6">
                        <div>
                            <p className="inline-block border border-gray-200 rounded px-3 py-1 text-sm font-mono bg-gradient-to-t from-sky-400 via-gray-400 to-sky-400 bg-clip-text text-transparent font-semibold">
                                Niche & Soft
                            </p>
                        </div>

                        <h1 className="text-3xl font-semibold text-gray-700">
                            Jemisse
                        </h1>

                        <p className="text-lg leading-relaxed text-gray-600">
                            Desenvolvedor de software com experiência em várias tecnologias, com foco no desenvolvimento back-end com Java Spring Boot e Node.js, e front-end com React.js. Em adição às minhas capacidades técnicas, tenho também fortes habilidades de gerenciamento de tempo e multitarefa. Sou confiante quanto à minha habilidade de gerar valor e resultados a qualquer projeto.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sobre;