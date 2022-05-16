import { BoxProps } from "../../util/interfaces";

const Box = ({ value, status }: BoxProps) => {
  return (
    <div
      className={`${
        status === "correct"
          ? "bg-green text-white"
          : status === "present"
          ? "bg-yellow text-white"
          : status === "absent"
          ? "bg-mediumGrey text-white"
          : "bg-lightGrey text-[#000000]"
      } ${
        status === "correct"
          ? "dark:bg-green"
          : status === "present"
          ? "dark:bg-yellow"
          : status === "absent"
          ? "bg-mediumGrey"
          : "dark:bg-darkEmptyLetter"
      } dark:text-white w-14 h-14 m-1 text-2xl font-bold flex justify-center items-center rounded-md`}
    >
      {value}
    </div>
  );
};

export default Box;
