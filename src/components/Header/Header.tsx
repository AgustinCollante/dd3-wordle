import React, { useState } from "react";
import { HeaderProps } from "../../util/interfaces";
import { Icon } from "@mui/material";
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { bgDay, bgDark } from "../../util/assets/index";

const Header = ({toggle, helper, stats, setToggle, setHelper, setStats }: HeaderProps) => {
  const toggleClass = " transform translate-x-5";
  
  return (
    <div className="h-24 w-auto bg-extraLightGrey dark:bg-darkKeyboardBg dark:text-white  mb-16 flex flex-row items-center justify-center rounded-md">
      <div className="flex justify-start w-52 pl-4 text-boldGrey dark:text-white" onClick={()=> setHelper(!helper)}>
      <HelpOutlinedIcon  fontSize='medium'/>
      </div>
      <div className="flex justify-center items-center w-52 ">
        <h1 className="text-5xl font-bold">Wordle</h1>
      </div>
      <div className="flex justify-center items-center w-52">
        <div className="mr-2 text-boldGrey dark:text-white" onClick={() => setStats(!stats)}>
        <AssessmentIcon fontSize="medium"/>
        </div>
        <div
          style={{backgroundImage: `url(${!toggle ? bgDay : bgDark })`, backgroundSize:'cover'}}
          className="md:w-14 md:h-7 w-11 h-6 flex items-center rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <div
            className={
              "bg-gradient-to-b from-[#FDB42D] to-[#F9A45B] border-2 border-[#FF9255] dark:border-[#CFE5FF] dark:bg-gradient-to-b dark:from-[#d1e6ff] dark:to-[#ecf6ff] md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
