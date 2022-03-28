import React from "react";
import styles from './About.module.css'
function About() {
  return (
    <section className="bg-[#35383e] py-[5rem] lg:py-[10rem]">
      <div className="container flex flex-col lg:flex-row justify-between gap-[4rem]">
        <div className="lg:w-1/2">
          <h1 className="text-white text-center lg:text-left font-bold capitalize text-[2rem]">
            what we are building
          </h1>
          <p className="mt-[1rem] text-[#e5e7eb] text-center lg:text-left">
            From its inception, Shiba Inu has done things differently. Starting
            with a supply of 1 quadrillion, our founder, Ryoshi, locked 50% in
            Uniswap, then “burned” the other half to Ethereum co-founder
            <br />
            <br />
            To help reverse the devastating spread of Covid-19 in India, VB has
            since utilized SHIB in the largest crypto donation in history, and
            then
          </p>
        </div>
        <div className="flex flex-col mt-[1rem] lg:flex-row lg:w-1/2">
          {[1, 2, 3].map((item, key) => (
            <div  className={` ${styles.icon} transition transition-all duration-500 w-full h-[6rem] lg:h-auto mb-[1rem] lg:py-[1rem] text-center lg:text-[0.8rem] rounded-lg flex lg:flex-col justify-between items-center px-[2rem] shadow-lg lg:mr-[2rem]`}>
              <img src="https://shibatoken.com/images/ico-uni.svg" />
              <h4 className="capitalize text-[#e5e7eb]">
                Liquidity Locked to Uniswap
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
