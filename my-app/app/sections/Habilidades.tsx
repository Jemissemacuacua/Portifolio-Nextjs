import React from 'react';
import { SiTypescript, SiTailwindcss, SiVercel, SiMysql, SiJavascript, SiNextdotjs, SiSpring, SiFirebase, SiFigma, SiNotion, SiApache } from 'react-icons/si';
import { FaNodeJs, FaReact, FaHtml5, FaGithub, FaGitAlt, FaJava, FaCss3Alt, FaSass, FaLinux } from 'react-icons/fa';

export default function SkillsSection() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-3 py-20 sm:py-32 lg:overflow-visible lg:px-0">
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

            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-600 sm:text-4xl text-center">
                Hábilidades Técnicas
            </h2>
            <p className="text-center py-3 font-mono text-gray-400 md:w-1/2 mx-auto">
                Com criatividade no desenvolvimento, construo interfaces digitais intuitivas, utilizando múltiplas ferramentas e linguagens de forma versátil.
            </p>

            <div className="mt-16 relative lg:flex lg:gap-x-8 lg:px-4 md:mx-auto md:w-4/5 max-w-7xl">
                {/* Card 1 - Tecnologias */}
                <div className="flex-1 mx-auto grid max-w-2xl grid-cols-1 gap-y-4 border-2 border-gray-200 rounded-3xl px-6 py-8 shadow-2xl isolate overflow-hidden relative bg-white">
                    <div>
                        <p className="text-base/7 font-semibold bg-gradient-to-t from-sky-400 via-gray-400 to-sky-400 bg-clip-text text-transparent">
                            <span className="border border-gray-100 rounded px-2 py-1 text-sm font-mono">Hard-Skills</span>
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-500">
                            Tecnologias com as quais trabalho
                        </h1>
                        <p className="mt-3 text-base text-gray-600 font-sans">
                            Gosto profundamente de resolver problemas por meio de código. Do front-end até o back-end. Com o uso de APIs intermediárias.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xl/8 bg-gradient-to-r from-gray-800 via-sky-400 to-emerald-800 bg-clip-text text-transparent font-mono">
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiTypescript className="text-blue-600" /> TypeScript
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaNodeJs className="text-green-600" /> Node
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaReact className="text-blue-400" /> React
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaHtml5 className="text-orange-500" /> HTML5
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiTailwindcss className="text-cyan-400" /> Tailwind
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaGithub /> GitHub
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaGitAlt /> Git
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiVercel className="text-black" /> Vercel
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiMysql className="text-blue-500" /> MySql
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiJavascript className="text-yellow-400" /> JavaScript
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiNextdotjs className="text-black" /> Next
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaJava className="text-red-500" /> Java
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiSpring className="text-green-500" /> Spring Boot
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiFirebase className="text-amber-500" /> Firebase
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaCss3Alt className="text-blue-500" /> CSS3
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaSass className="text-pink-500" /> SASS
                        </span>
                    </div>
                </div>

                {/* Card 2 - Softwares */}
                <div className="flex-1 mx-auto grid max-w-2xl grid-cols-1 gap-y-4 border-2 border-gray-200 rounded-3xl px-6 py-8 shadow-2xl isolate overflow-hidden relative bg-white mt-8 lg:mt-0">
                    <div>
                        <p className="text-base/7 font-semibold bg-gradient-to-t from-sky-400 via-gray-400 to-sky-400 bg-clip-text text-transparent">
                            <span className="border border-gray-100 rounded px-2 py-1 text-sm font-mono">Hard-Skills</span>
                        </p>
                        <h1 className="mt-2 text-2xl font-semibold text-gray-500">
                            Softwares com os quais trabalho
                        </h1>
                        <p className="mt-3 text-base text-gray-600 font-sans">
                            Com mais de 1 ano de experiência no desenvolvimento de software. Estes são apenas alguns dos softwares que usei durante esse tempo.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xl/8 bg-gradient-to-r from-gray-800 via-sky-400 to-emerald-800 bg-clip-text text-transparent font-mono">
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            VsCode
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <FaLinux className="text-black" /> Linux
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiFigma className="text-purple-500" /> Figma
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiMysql className="text-blue-600" /> MySql Workbench
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiNotion className="text-black" /> Notion
                        </span>
                        <span className="border border-gray-300 rounded px-2 py-1 text-sm flex items-center gap-1">
                            <SiApache className="text-red-500" /> Apache NetBeans
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}