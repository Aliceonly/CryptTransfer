import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={`w-10 h-10 mt-4 ml-2 rounded-full flex justify-center items-center ${color}`}
    >
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 mb-1 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
        区块链与碳足迹
          <br />
          有何关系？
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
        区块链挖矿通常由工作量证明（PoW）共识机制驱动<br />这意味着通过执行一些数学计算来分散验证新交易<br />将其添加到区块链中并获得奖励<br />由于巨大的能源资源支持这一过程<br />随着加密货币用户数量的迅速增加，环境影响正在恶化。
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952E3]"
          title="可持续型顶层设计"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle='区块链技术与第三方服务是企业走通低碳转型之路的两件互补工具。区块链能帮助企业加强或从零建设符合国家标准的碳排放管理体系。'
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="织网型碳管理"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="链上数据一方面能帮助企业提高整体效率和资源利用率；另一方面则能帮助企业实现符合标准规范的碳核算"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="碳足迹资产化"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="链上长期积累的低碳行为记录能更快、更广泛地应用于各类明确的体系标准评级与数字型描述，令企业从容适应信贷结构调整，或者进行上市信息披露。"
        />
      </div>
    </div>
  </div>
);

export default Services;
