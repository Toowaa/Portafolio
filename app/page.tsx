"use client";
import { Letras } from "@/components/textfinal";
import { Textver1 } from "@/components/textver1";
import React from "react";

export default function Home() {
  const [istext, setText] = React.useState(true);
  return (
    <>
      {istext ? (
        <div>
          <Textver1 setText={setText} />
          </div>
      ) : (
        <Letras setText={setText} />
      )}
    </>
  );
}
