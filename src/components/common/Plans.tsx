import React from "react";
const PlansData = [
  {
    title: "Basic",
    price: 10,
    futires: ["10GB Storage", "10 Users", "Basic Support"],
  },
  {
    title: "Standard",
    price: 20,
    futires: ["20GB Storage", "20 Users", "Basic Support"],
  },
  {
    title: "Premium",
    price: 30,
    futires: ["30GB Storage", "30 Users", "Basic Support"],
  },
];
const Plans = () => {
  return (
    <div className="flex flex-col justify-center  h-screen ">
      <h1 className="text-3xl font-bold text-center">Plans</h1>
      <div className=" flex justify-around  gap-5 my-14">
        {PlansData.map((plan) => (
          <Plan key={plan.title} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;

type PlanProps = {
  title: string;
  price: number;
  futires: string[];
};

const Plan = ({ title, price, futires }: PlanProps) => {
  return (
    <div className="bg-base-100 shadow-md rounded p-4 md:p-6 flex flex-col gap-5 mx-5 px-10 border  flex-1">
      <h1 className="text-3xl font-bold text-start w-28 ">{title}</h1>

      <p className="text font-bold">${price}</p>
      <div>
        {futires.map((futire) => (
          <p key={futire} className="text-lg">
            {futire}
          </p>
        ))}
      </div>
    </div>
  );
};
