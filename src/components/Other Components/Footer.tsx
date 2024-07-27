import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-[#fff] p-[50px] px-[150px] pt-[180px] max-1300:px-[80px] max-1200:px-[65px] max-1000:px-[40px] max-800:px-[20px] relative z-[400] bg-black max-650:pt-[50px]">
        <div className="flex justify-between max-650:flex-col items-center max-650:gap-[40px] max-650:items-start">
          <div className="w-fit">
            <img
              src={logo}
              className="w-[290px] max-1300:w-[260px] max-1000:w-[230px] max-700:w-[200px] max-650:w-[260px]"
              alt=""
            />
            <p className="text-[#ffffff66] text-[16px] ml-[50px] relative bottom-[18px] max-1000:ml-[30px] max-1000:text-[14px]   max-650:ml-0">
              Subscribe our newsletter:
            </p>
            <div className="relative">
              <input
                type="text"
                className="w-[23vw] ml-[30px] border-[1px] text-[12px] outline-none border-[#333] bg-[#1a1a1a] text-paraColor py-[18px] text-[#ffffff66] px-[30px] rounded-[35px] max-1200:text-[11px]  max-900:px-[15px] max-900:w-[29vw] max-700:py-[13px] max-650:w-[50vw] max-550:w-[60vw] max-650:ml-0"
                placeholder="ENTER YOUR EMAIL"
              />
              <button className="absolute w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center right-[10px] bottom-[9px] max-900:h-[35px]  max-900:w-[35px] max-700:h-[30px] max-700:w-[30px]">
                <svg
                  stroke="currentColor"
                  fill="#000000"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.5em"
                  width="1.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div>
            <ul className="grid gap-[14px] w-[230px] text-[33px] max-1300:text-[30px] max-1200:text-[28px] max-1200:w-[200px] max-1000:w-[130px] max-1000:text-[26px] max-900:text-[25px]  max-700:w-[100px] max-700:text-[21px] max-650:text-[26px]">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="w-[230px] text-[18px] leading-[40px] max-1200:text-[17px] max-1000:text-[14px] max-1000:leading-[31px] max-900:w-[200px] max-900:text-[13px] max-700:text-[15px] max-700:w-[190px] max-650:text-[18px]">
              <li className=" text-[#ffffff66]">Privacy Policy</li>
              <li className=" text-[#ffffff66]">Terms and conditions</li>
              <li className=" text-[#ffffff66]">Cookie Policy</li>
              <li className=" text-[#ffffff66]">Career</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[70px] max-650:flex-col max-650:gap-[40px] max-650:items-start">
          <div>
            <div className="flex gap-5 mb-[25px]">
              <svg
                stroke="white"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path>
              </svg>
              <svg
                stroke="white"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
              </svg>
              <svg
                stroke="white"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
              </svg>
              <svg
                stroke="white"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"></path>
              </svg>
            </div>
            <p className="text-[16px] text-[#ffffff66] max-900:text-[13px]">
              © Copyright 2023 - Mil. All Rights Reserved.
            </p>
          </div>
          {/* <div className="w-[215px]">
            <p className="text-[22px] max-900:text-[20px]">Canada</p>
            <p className="text-[14px] text-[#ffffff66] max-900:text-[13px]">
              {" "}
              71 South Los Carneros Road, California +51 174 705 812
            </p>
          </div>
          <div className="w-[215px]">
            <p className="text-[22px] max-900:text-[20px]">Germany</p>
            <p className="text-[14px] text-[#ffffff66] max-900:text-[13px]">
              Leehove 40, 2678 MC De Lier, Netherlands +31 174 705 811
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
