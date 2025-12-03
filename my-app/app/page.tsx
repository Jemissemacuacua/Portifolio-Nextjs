

import JemisseCta from "./sections/CtaJemisse";
import Unilib from "./sections/Projectos/UniLib";
import Jemisse from "./sections/Projectos/Jemisse";
import Sobre from "./sections/Sobre";
import Habilidades from "./sections/Habilidades";
import ColorChangingFooter from "./sections/ColorChangingFooter";
import { use } from "react";

export default function Home() {
  return (
    <div>
      <JemisseCta />
      <Unilib />
      <Jemisse />
      <Sobre />
      <Habilidades />
      <ColorChangingFooter />

    </div>
  );
}
