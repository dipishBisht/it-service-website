import React, { useState, useEffect } from "react";

type StackFeature = {
  stack: string;
  stackFeatures: string[];
};

type TechStackProps = {
  myStack: StackFeature[];
  stackName: string;
};

const TechStack: React.FC<TechStackProps> = ({ myStack }) => {
  const [stack, setStack] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (myStack && myStack.length > 0) {
      setStack(myStack[0].stackFeatures);
    }
  }, [myStack]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-12 text-2xl font-semibold">
        <div className="grid grid-cols-4 max-800:grid-cols-2 max-800:gap-y-7 max-550:grid-cols-1">
          {myStack.map((val, ind) => {
            return (
              <h1
                key={ind}
                className={`text-center w-full cursor-pointer py-3 border-black ${
                  ind === index
                    ? "border-2 border-b-0 text-[#9C00FB]"
                    : "border-b-2"
                }`}
                onClick={() => {
                  setStack(myStack[ind].stackFeatures);
                  setIndex(ind);
                }}
              >
                {val.stack}
              </h1>
            );
          })}
        </div>
        <div className="grid grid-cols-4 max-800:grid-cols-2 max-800:gap-y-7 max-550:grid-cols-1">
          {stack.map((val, ind) => {
            return (
              <div key={ind} className="w-full flex justify-center">
                <h1 className="w-fit text-center border-b-2 border-black py-3">
                  {val}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
