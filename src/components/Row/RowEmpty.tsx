import React from "react";
import Box from "../Box/Box";

const RowEmpty = () => {
    return(
        <div className="flex flex-row">
            {
                Array.from(Array(5)).map((e,i) => (
                    <Box key={i} value="" status="empty"/>
                ))
            }
        </div>
    )
}

export default RowEmpty;