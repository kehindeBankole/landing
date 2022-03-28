import React from "react";

function Howto() {
  return (
    <section className="bg-[#201e29] text-white text-center py-[5rem]">
      <div className="container">
        <div className="lg:flex justify-between text-left ">
          <div className=" flex py-[2rem] lg:order-2">
            <img
              className="w-[50%] sm:w-[30%] lg:w-[100%]  m-auto "
              src="https://shibatoken.com/images/c1.png"
              alt=""
            />
          </div>

          <div className="sm:text-left text-center lg:w-[50%] lg:m-0 m-auto">
            <header className="capitalize font-bold text-2xl mb-[2rem]">
              How to buy
            </header>

            <p className="p">
              SHIB and LEASH are best purchased and sold through{" "}
              <span className="p--white">ShibaSwap</span>, but can also be found
              on Uniswap and an ever-growing list of CEXs. Please note that,
              outside of ShibaSwap, exchanges which support one may not support
              the other.
              <br />
              <br />
              SHIB is a decentralized experiment and, as such, we always
              incentivize the use of DEXs. If you choose to utilize a CEX
              instead, remember to research it first to ensure it is both safe
              and secure.
            </p>
            <div className=" text-left">
              <button className="capitalize mt-5  bg-[#F28B03] w-[120px] p-3 rounded-[1.5rem]">
                buy <span className="uppercase">shib</span>
              </button>

              <button className="mx-5 capitalize mt-5  bg-[#F28B03] w-[120px] p-3 rounded-[1.5rem]">
                buy <span className="uppercase">shib</span>
              </button>

              <button className="capitalize mt-5  bg-[#F28B03] w-[120px] p-3 rounded-[1.5rem]">
                buy <span className="uppercase">shib</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Howto;
