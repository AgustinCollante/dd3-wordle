import { BoxProps } from "../../util/interfaces";

//Utils
import { colorsByStatus } from "../../util/functions";

const Box = ({value, status}: BoxProps) => {

    return(
        <div className={`bg-${colorsByStatus(status)} w-16 h-16 m-1 text-xl font-bold flex justify-center items-center rounded-md`} >{value}</div>
    )
}

export default Box;