import React from "react";
import Box from "../Box/Box";
import { HelperProps } from "../../util/interfaces";

const Helper = ({ helper, setHelper, toggle }: HelperProps) => {
  return (
    <div className=" bg-extraLightGrey dark:bg-darkBg dark:text-white w-auto h-auto border-2 border-[#000000] p-6 rounded-2xl">
      <h1 className=" font-bold text-3xl m-6 text-center">Cómo jugar</h1>
      <div className="text-sm flex flex-col justify-center">
        <p>Adivina la palabra oculta en cinco intentos.</p>
        <p className="my-2">
          Cada intento debe ser una palabra válida de 5 letras.
        </p>
        <p>
          Después de cada intento el color de las letras cambia
          <br /> para mostrar qué tan cerca estás de acertar la palabra.
        </p>
      </div>
      <div className="text-sm flex flex-col justify-center my-2">
        <p className="font-semibold my-3">Ejemplos</p>
        <div className="flex flex-row">
          <Box value={"G"} status={"correct"} toggle={toggle} />
          <Box value={"A"} status={"empty"} toggle={toggle} />
          <Box value={"T"} status={"empty"} toggle={toggle} />
          <Box value={"O"} status={"empty"} toggle={toggle} />
          <Box value={"S"} status={"empty"} toggle={toggle} />
        </div>
        <p className="mt-1">
          La letra <span className="font-semibold">G</span> está en la palabra y
          en la posición correcta.
        </p>
      </div>
      <div className="text-sm my-3">
        <div className="flex flex-row">
          <Box value={"V"} status={"empty"} toggle={toggle} />
          <Box value={"O"} status={"empty"} toggle={toggle} />
          <Box value={"C"} status={"present"} toggle={toggle} />
          <Box value={"A"} status={"empty"} toggle={toggle} />
          <Box value={"L"} status={"empty"} toggle={toggle} />
        </div>
        <p className="mt-1">
        La letra <span className="font-semibold">C</span> está en la palabra pero en la posición incorrecta.
        </p>
      </div>
      <div className="text-sm my-3">
        <div className="flex flex-row">
          <Box value={"V"} status={"empty"} toggle={toggle} />
          <Box value={"O"} status={"empty"} toggle={toggle} />
          <Box value={"C"} status={"empty"} toggle={toggle} />
          <Box value={"A"} status={"empty"} toggle={toggle} />
          <Box value={"L"} status={"absent"} toggle={toggle} />
        </div>
        <p className="mt1">
        La letra <span className="font-semibold">O</span> no está en la palabra.
        </p>
      </div>
      <div className="text-sm flex flex-col justify-center my-3">
        <p>
        Puede haber letras repetidas. Las pistas son <br /> independientes para cada letra.
        </p>
      </div>
      <p className="text-sm my-8 text-center">
      ¡Una palabra nueva cada 5 minutos!
      </p>
      <div className="flex flex-col justify-center">
        <button
          className="w-48 p-1 bg-green text-2xl font-medium text-white self-center rounded"
          onClick={() => setHelper(!helper)}
        >
          !JUGAR¡
        </button>
      </div>
    </div>
  );
};

export default Helper;
