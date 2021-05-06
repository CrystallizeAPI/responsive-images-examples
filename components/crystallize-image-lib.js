import React from "react";
import { Image } from "@crystallize/react-image";
import pretendThisIsFromTheCrystallizGraph from "./assets/crystallize-image";

export default function CrystallizeImageLib() {
  return (
    <Image
      {...pretendThisIsFromTheCrystallizGraph}
      sizes="(max-width: 768px) 80vw, 500px"
    />
  );
}
