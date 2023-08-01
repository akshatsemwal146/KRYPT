import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="https://crypto.com/exchange/markets"><p className="text-white text-base text-center mx-2 cursor-pointer">Market</p></a>
        <a href = "https://crypto.com/exchange/trade?type=spot"><p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p></a>
        <a href = "https://crypto.com/university/crypto-exchange-basics"><p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p></a>
        <a href = "https://www.binance.com/en/my/wallet/account/overview"><p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p></a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@krypt.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@krypt2023</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
