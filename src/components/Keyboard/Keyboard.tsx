import React from "react";  
import { KeyboardProps } from "../../util/interfaces";
import { letters } from "../../util/functions";
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const Keyboard = ({
    onKeyPressed,
}: KeyboardProps ) => {

    const handleInput = (e:any) => {
        onKeyPressed(e.target.textContent)
    }

    const handleDelete = () => {
        onKeyPressed("BACKSPACE");
    }
    return(
        <div className="bg-extraLightGrey dark:bg-darkKeyboardBg dark:text-white w-auto h-56 mt-10 flex flex-col justify-center items-center rounded-2xl text-lg font-bold text-[#56575D]">
        <div className="">
            {
                Array.from(Array(10)).map((e,i) => (
                    <button key={i} onClick={handleInput} className="bg-grey dark:bg-darkKeys w-10 h-12 m-1 rounded-md font-bold text-base">
                        {letters[i]}
                    </button>
                ))
            }
            </div>
            <div className="mt-1 mb-1 ml-8" >
             {
                Array.from(Array(10)).map((e,i) => (
                    <button key={i+9 } onClick={handleInput}  className="bg-grey dark:bg-darkKeys w-10 h-12 m-1 rounded-md font-bold text-base">
                        {letters[i+10]}
                    </button>
                ))
            }
             </div>
            <div className="ml-4 mr-10">
            <button  className="bg-grey dark:bg-darkKeys w-20 h-12 mx-1 rounded-md font-bold text-base">
               Enter 
            </button>
            {
                Array.from(Array(7)).map((e,i) => (
                    <button key={i+20 } onClick={handleInput}  className="bg-grey dark:bg-darkKeys w-10 h-12 m-1 rounded-md font-bold text-base">
                        {letters[i+20]}
                    </button>
                ))
            }
             <button  className="bg-grey dark:bg-darkKeys w-20 h-12 ml-2 mr-2 rounded-md font-bold text-base" onClick={handleDelete}>
               <BackspaceOutlinedIcon/>
            </button>
            </div>
            
        </div>
    )
}

export default Keyboard;