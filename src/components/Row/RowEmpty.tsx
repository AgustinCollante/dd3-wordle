import React from "react";
import Box from "../Box/Box";
import { RowEmptyProps } from "../../util/interfaces";

const RowEmpty = ({toggle}:RowEmptyProps) => {
    return(
        <div className="flex flex-row">
            {
                Array.from(Array(5)).map((e,i) => (
                    <Box key={i} value="" status="empty" toggle={toggle}/>
                ))
            }
        </div>
    )
}

export default RowEmpty;