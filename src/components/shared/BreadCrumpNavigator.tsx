import Link from 'next/link';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const BreadCrumpNavigator = ({ paths }: { paths: string[]; }) => {
    return (
        <div className='py-[10px] px-[10px] text-[#777] text-[12px] flex gap-[12px] items-center'>
            <Link href={'/'}>
                <AiOutlineHome className='text-lg hover:text-[#08c] duration-500 cursor-pointer' />
            </Link>
            {paths.map((item, i) => {
                if (i == paths.length) {
                    return <span key={i} className='uppercase'>{item}</span>;
                } else {
                    return <React.Fragment key={i}>
                        <IoIosArrowForward className='' />
                        <span className='uppercase'>{item}</span>
                    </React.Fragment>;
                }
            })}
        </div>
    );
};

export default BreadCrumpNavigator;