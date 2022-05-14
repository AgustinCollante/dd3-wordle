import React from "react";  
import { KeyboardProps } from "../../util/interfaces";
import { letters } from "../../util/functions";

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
        <div className="bg-lightGrey w-1/2 h-48 mt-10 flex flex-col justify-center items-center rounded-2xl text-lg font-bold">
        <div className="h">
            {
                Array.from(Array(10)).map((e,i) => (
                    <button key={i} onClick={handleInput} className="bg-grey w-10 h-12 ml-2 mr-2 rounded-md">
                        {letters[i]}
                    </button>
                ))
            }
            </div>
            <div className="mt-4 mb-4" >
             {
                Array.from(Array(10)).map((e,i) => (
                    <button key={i+9 } onClick={handleInput}  className="bg-grey w-10 h-12 ml-2 mr-2 rounded-md">
                        {letters[i+10]}
                    </button>
                ))
            }
             </div>
            <div>
            <button  className="bg-grey w-24 h-12 mx-1 rounded-md">
               Enter 
            </button>
            {
                Array.from(Array(7)).map((e,i) => (
                    <button key={i+20 } onClick={handleInput}  className="bg-grey w-10 h-12 ml-2 mr-2 rounded-md">
                        {letters[i+20]}
                    </button>
                ))
            }
             <button  className="bg-grey w-24 h-12 ml-2 mr-2 rounded-md" onClick={handleDelete}>
               Delete 
            </button>
            </div>
            
        </div>
    )
}

export default Keyboard;