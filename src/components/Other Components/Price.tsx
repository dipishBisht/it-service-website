import React, { useState } from 'react';
import SparklesText from '../ui/sparkles-text';

interface Pricing {
  category: string;
  price: string;
  period: string;
  Tagline: string;
  Recommanded?: string;
}

const PriceData: { [key: string]: Pricing[] }[] = [
  {
    Monthly: [
      {
        category: 'Starter',
        price: '499',
        period: 'Month',
        Tagline: 'Perfect for growing business',
      },
      {
        category: 'Growth',
        price: '999',
        period: 'Month',
        Tagline: 'Ideal for Established Enterprises',
        Recommanded: 'Most Popular',
      },
      {
        category: 'Pro',
        price: '1299',
        period: 'Month',
        Tagline: 'Ultimate Solution for Innovators',
      },
    ],
  },
  {
    Quarterly: [
      {
        category: 'Starter',
        price: '1499',
        period: 'Quarter',
        Tagline: 'Perfect for growing business',
      },
      {
        category: 'Growth',
        price: '2999',
        period: 'Quarter',
        Tagline: 'Ideal for Established Enterprises',
        Recommanded: 'Most Popular',
      },
      {
        category: 'Pro',
        price: '3199',
        period: 'Quarter',
        Tagline: 'Ultimate Solution for Innovators',
      },
    ],
  },
];

interface DivProps {
  data: Pricing;
  ind: number;
}

const Div: React.FC<DivProps> = ({ data, ind }) => {
  return (
    <div
      className={`h-[300px] w-[280px] max-900:h-[275px] max-900:w-[265px] max-800:h-[240px] max-800:w-[220px] max-700:h-[200px] max-700:w-[185px] max-600:h-[264px] max-600:w-[260px] ${ind === 1 ? 'bg-[#000] text-[#fff] z-10' : 'bg-[#f8f8f8] text-[#27363d] shadow-custom'
        } rounded-[40px] text-left p-[30px] relative ${ind === 0 ? 'rotate-[-8deg] max-600:rotate-[0deg] top-[10px]' : ind === 2 ? 'rotate-[8deg] max-600:rotate-[0deg] top-[10px]' : ''
        }`}
    >
      <p className="text-[33px] max-900:text-[30px] max-800:text-[26px] max-700:text-[21px] max-600:text-[32px]">{data.category}</p>
      <p className="text-[19px] max-900:text-[17px] max-800:text-[15px] max-700:text-[9px] max-600:text-[20px]">
        <span className="relative bottom-[11px] right-[5px] text-[20px] max-900:text-[18px] max-800:bottom-[9px] max-700:text-[15px] max-700:bottom-[6px] max-600:text-[20px] max-600:bottom-[8px]">₹</span>
        <span className={`text-[40px] max-900:text-[35px] max-800:text-[31px] max-700:text-[25px] max-600:text-[32px]`}>{data.price}</span>/
        {data.period}
      </p>
      <p className="absolute bottom-[30px] text-[16px] max-900:text-[15px] max-800:text-[15px] max-700:text-[14px] left-5 max-600:text-[15px]">{data.Tagline}</p>
    </div>
  );
};

const Price: React.FC = () => {
  const [count, setCount] = useState(0);
  const [period, setPeriod] = useState<Pricing[]>(PriceData[0].Monthly);

  return (
    <>
      <div className="text-center w-screen flex flex-col items-center py-[50px]  bg-white ">
       
          <div className='flex flex-col text-black'>
            <div className='flex gap-2 items-end'>
              <SparklesText text='Explore' sparklesCount={2} />
              <SparklesText text='Our' sparklesCount={2} isBig={true} />
            </div>
            <div className='flex gap-2 items-end'>
              <SparklesText text='Pricing' sparklesCount={2} />
              <SparklesText text='Plans' sparklesCount={2} isBig={true} />
            </div>
          </div>

      
        <p className="w-[600px] text-[#787878] text-[17.5px] mt-[10px] max-900:text-[17px] max-800:text-[16px] max-700:text-[12px] max-600:w-[500px] max-550:w-[400px]">
          Discover Tailored Solutions Designed to Meet Your Specific Needs and Budgets, Ensuring Value
          and Flexibility.
        </p>
        <div
          className={`flex w-[300px] h-fit items-center bg-[#f8f8f8] rounded-full mt-[20px] p-[4px] shadow-custom relative before:content-[""] before:absolute before:w-1/2 before:bg-[#000] before:h-[47px] before:top-[5px] before:rounded-full ${count === 0 ? 'before:translate-x-0' : 'before:translate-x-[94%]'
            } before:duration-[600ms]`}
        >
          <p
            className={`w-[50%] h-[100%] p-[10px] rounded-full flex items-center justify-center ${count === 0 ? 'text-[#fff]' : 'text-[#000]'
              } text-[20px] relative z-10 duration-[600ms] max-900:text-[18px] max-800:text-[17px]`}
            onClick={() => {
              setCount(0);
              setPeriod(PriceData[0].Monthly);
            }}
          >
            Monthly
          </p>
          <p
            className={`w-[50%] h-[100%] p-[10px] flex items-center justify-center ${count === 0 ? 'text-[#000]' : 'text-[#fff]'
              } text-[20px] duration-[600ms] relative z-10 max-900:text-[18px] max-800:text-[17px]`}
            onClick={() => {
              setCount(1);
              setPeriod(PriceData[1].Quarterly);
            }}
          >
            Quarterly
          </p>
        </div>
        <div className="flex mt-[40px] max-600:flex-col max-600:gap-10 ">
          {period.map((val, ind) => (
            <Div key={ind} data={val} ind={ind} />
          ))}
        </div>
        <div className="mt-14">
          <h1 className="text-[#27363d] text-[25px] font-semibold max-900:text-[23px] max-700:text-[22px] max-550:text-[20px]">All Plans Include</h1>
          <div className="flex gap-[100px] max-800:flex-col max-900:gap-[70px] max-800:gap-[12px] mt-[23px] text-[#000]">
            <ul>
              <li className="w-[370px] max-800:w-[600px] max-700:w-max max-900:w-[350px] max-550:w-[380px] max-550:text-[14px]  text-left text-[17px] max-900:text-[16px] max-800:text-[18px] max-700:text-[15px] max-600:w-[400px] relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                Expert bookkeeping, automated reports, and tax assistance.
              </li>
              <li className="w-[370px] max-800:w-[600px] max-700:w-max max-900:w-[350px] max-550:w-[380px] max-550:text-[14px] max-900:text-[16px] text-left text-[17px] max-800:text-[18px] max-700:text-[15px] max-600:w-[400px] mt-3 relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                We maintain high standards by conducting thorough research.
              </li>
            </ul>
            <ul>
              <li className="w-[370px] max-800:w-[600px] max-700:w-max max-900:w-[350px] max-550:w-[380px] max-550:text-[14px]   text-left text-[17px] max-900:text-[16px] max-800:text-[18px] max-700:text-[15px] max-600:w-[400px] relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                Our pricing plans are designed to be flexible and cater.
              </li>
              <li className="w-[370px] max-800:w-[600px] max-700:w-max max-900:w-[350px] max-550:w-[380px] max-550:text-[14px] text-left text-[17px] max-900:text-[16px] max-800:text-[18px] max-700:text-[15px] max-600:w-[400px] mt-3 relative before:absolute before:content-[url('/src/assets/circle-check.png')] before:left-[-40px] before:top-[1.5px]">
                Absolutely! We tailor our design solutions to meet your specific needs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
