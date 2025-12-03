"use client";
import EfeitoEscrever from "./EfeitoEscrever";
import NavbarCTA from "./NavBar";

function JemisseCta() {
  return (
    <div className="bg-gray-900">
      <NavbarCTA/>
      <div className="relative isolate overflow-hidden bg-white px-3 py-20 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="mx-auto max-w-4xl">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 shadow-2xl rounded-3xl sm:px-8 md:py-20 lg:flex lg:gap-x-20 lg:px-12 border-2 border-gray-700">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={200} cy={400} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          
          <div className="mx-auto max-w-md lg:mx-0 lg:flex-auto lg:py-12 lg:text-left space-y-6">
            <EfeitoEscrever />
            
            <div className="space-y-2">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Jemisse Macuacua.
              </h2>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-400 sm:text-4xl">
                Apaixonado por tecnologia.
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-400 font-mono">
              Eu sou um Software Developer com mais de 1 ano de experiência em prover soluções para problemas usando tecnologia.
            </p>
            
            <div className="flex gap-x-6 lg:justify-start font-mono">
              <a
                href="mailto:macuacuajemisse@gmail.com"
                className="rounded-md bg-sky-700 px-3.5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-sky-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Contactar-me
              </a>
              <a 
                href="https://www.linkedin.com/in/jemisse-macu%C3%A1cua-5999b62bb/" 
                className="rounded-md bg-gray-800 px-3.5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                LinkedIn <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default JemisseCta;
