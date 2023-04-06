import React from 'react';

const CustomDarkButton = ({ children }: { children: React.ReactNode; }) => {
    return (
        <button className='bg-[#222529] hover:bg-[#34393f] text-white hover:text-white duration-500 px-[25px] leading-10 text-[13px] font-bold'>{children}</button>
    );
};

export default CustomDarkButton;