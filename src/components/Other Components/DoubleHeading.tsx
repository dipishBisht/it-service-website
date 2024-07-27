type DoubleHeadingProps = {
  heading: string;
  subHeading: string;
};

const DoubleHeading: React.FC<DoubleHeadingProps> = ({ heading, subHeading }) => {

  return (
    <>
    <div className="relative">
      <hr className="absolute w-[45px] border-[3px] border-secondaryColor rotate-[50deg] -left-[44px] -top-[7px] rounded-[5px]" />
      <hr className="absolute w-[25px] border-[3px] border-secondaryColor rotate-[5deg] -left-[34px] top-[18px] rounded-[5px]" />
      <hr className="absolute w-[25px] border-[3px] border-secondaryColor rotate-[90deg] -left-[13px]  -top-[9px] rounded-[5px]" />
      <h1 className="text-titleSize font-[500] flex gap-1">
        {heading}
        <span className="font-thin">
          {subHeading}
        </span>
      </h1>
      </div>
    </>
  );
};

export default DoubleHeading;
