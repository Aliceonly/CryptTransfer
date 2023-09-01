import React, { useContext } from "react";
import { AiFillPlayCircle, AiFillCheckCircle } from "react-icons/ai";
import { PiShootingStarFill } from "react-icons/pi";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";

import { Loader } from ".";
import { shortenAddress } from "../utils/shortenAddress";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Textarea = ({ placeholder, name, type, value, handleChange }) => (
  <textarea
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-3 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  ></textarea>
);

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    sendTransaction,
    handleChange,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-lime-500 text-gradient py-1">
            区 块 链 <br /> 迈向碳中和的一步
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-8/10 w-9/10 text-base">
            多年来，人们一直对区块链的环境成本表示担忧。
            <br />
            加密货币经常被指责消耗大量能源，是一场绝对的气候灾难。
            <br />
            作为回应，加密行业必须改变方向，通过采用绿色区块链战略来实现碳中和。
            <br />
            <br />
            您可以为区块链碳中和事业献上您的财富与意见：
          </p>
          {!currentAccount ? (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-indigo-500"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                连接到MetaMask
              </p>
            </button>
          ) : (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-indigo-500"
            >
              <AiFillCheckCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                已连接 ! !{" "}
                <PiShootingStarFill className="text-white mr-2 inline" />
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              工作量证明
            </div>
            <div className={companyCommonStyles}>环境成本</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              能源消耗
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              碳足迹
            </div>
            <div className={companyCommonStyles}>气候灾害</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              环境恶化
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism animate-pulse">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Sepolia Network
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="捐赠 (任何数额的SepoliaETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="关键词 (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Textarea
              placeholder="您的意见"
              name="message"
              type="text"
              handleChange={handleChange}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
