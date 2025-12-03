import Image from "next/image";
import JemisseCta from "./sections/CtaJemisse";
import Unilib from "./sections/Projectos/UniLib";
import Filmes from "./sections/Projectos/Filmes";

export default function Home() {
  return (
    <div>
     <JemisseCta/>
     <Unilib/>
     <Filmes/>
      
    </div>
  );
}
