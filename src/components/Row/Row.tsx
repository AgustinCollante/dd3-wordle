import React from "react";
import Box from "../Box/Box";
import { RowProps } from "../../util/interfaces";

//Utils
import { checkLetter } from "../../util/functions";

const Row = ({word, solution}: RowProps) => {
    return (
        <div className="flex flex-row">
           {
               Array.from(Array(5)).map((e,i) => (
                   <Box key={i} value={word[i]} status={checkLetter(word[i], i, solution)}/>
               ))
           }
        </div>
    )
}

export default Row;