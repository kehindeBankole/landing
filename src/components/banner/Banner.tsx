import React from "react";

function Banner() {
  return (
    <section className="bg-[#201e29] py-[5rem] lg:py-[0] lg:pt-[10rem] lg:h-auto">
      <div className="container flex flex-col lg:flex-row items-center px-[1rem] lg:px-[0] ">
        <div className="flex flex-col">
          <h1 className="text-[1.2rem] text-center lg:text-left lg:text-[3rem] text-white">
            A Decentralized Meme Token that Evolved into a Vibrant Ecosystem
          </h1>
          <p className="text-center lg:text-left text-white mt-[1rem]">SHIB, LEASH, BONE — ShibaSwap — Innovative Reward System — The Shiba Incubator — And more. 585k+ Community Members and Growing Fast!</p>
       <div className="flex flex-col items-center mt-[3rem] lg:flex-row ">
           <button className="transition transition-all duration-300 hover:-translate-y-[1.2rem] h-[4rem] w-[14rem] bg-purple-500 rounded-[5rem] capitalize text-white">how to buy</button>
            <button className=" transition transition-all duration-300 hover:-translate-y-[1.2rem] h-[4rem] w-[14rem] border-purple-500 border-2 text-purple-500 rounded-[5rem] capitalize mt-[1rem] lg:mt-0 lg:ml-[1rem]">learn more</button>
       </div>
        </div>
        <img src="https://shibatoken.com/images/hero-shib.png" className="w-[29rem] object-contain hidden lg:flex" />
      </div>
    </section>
  );
}

export default Banner;
