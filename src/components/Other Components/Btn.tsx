import React from 'react';
import "../../styles/btn.css";

type BtnProps = {
  heading: string;
};

const Btn: React.FC<BtnProps> = ({ heading }) => {
  return (
    <div>
      <div className="btn">
        <p className='relative z-10'>{heading}</p>
      </div>
    </div>
  );
};

export default Btn;
