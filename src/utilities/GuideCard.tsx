import React from "react";
interface Props {
  text: string;
  step: number;
  title: string;
}

function GuideCard(props: Props) {
  return (
    <div
      id="first-step"
      className="flex py-[3rem] flex-col lg:flex-row bg-[#18171f] text-white  mt-[10px] lg:h-[15rem] items-center lg:px-[4rem] rounded-[1.5rem]"
    >
      <div id="step-1" className="p-4 flex text-black">
        {" "}
        <p className="bg-gray-100 w-[4rem] h-[4rem] flex items-center justify-center m-auto rounded-full">
          {props.step}
        </p>{" "}
      </div>

      <div className="hidden lg:block px-5 m-auto lg:my-[auto] h-[1px] bg-red-500 w-[6rem] lg:mx-[2rem]"></div>

      <div className="m-auto lg:m-[0] p-5 lg:p-[0] lg:ml-[2rem]">
        <h2 className="capitalize font-bold text-2xl w-[80%] m-auto mb-[20px] lg:w-[100%]">
          {props.title}
        </h2>
        <p id="guide-content" className="">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default GuideCard;
