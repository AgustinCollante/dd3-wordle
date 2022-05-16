import React from "react";

import Box from "../Box/Box";

import { RowCurrentProps } from "../../util/interfaces";
const RowCurrent = ({word, toggle}: RowCurrentProps) => {
    return (
        <div className="flex flex-row">
            <> 
            {
                word.split("").map((e,i) => (
                    <Box key={i} value={e} status="edit" toggle={toggle}/>
                ))
            }
            {
                Array.from(Array(5 - word.length )).map((e,i) => (
                    <Box key={i} value={''} status="edit" toggle={toggle}/>
                ))
            }
              </>
        </div>
    )
}

export default RowCurrent; 